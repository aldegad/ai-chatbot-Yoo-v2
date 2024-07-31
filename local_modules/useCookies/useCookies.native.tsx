import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCookiesHook } from '@local_modules/useCookies/useCookies.type';

export default function useExpoCookies(): useCookiesHook {
  const [cookies, setCookies] = useState<{[key: string]: string}>({});

  useEffect(() => {
    const loadCookies = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
        const storedItems = result.reduce((acc, [key, value]) => {
          if (value) acc[key] = value;
          return acc;
        }, {} as {[key: string]: string});
        setCookies(storedItems);
      } catch (error) {
        console.error('Error loading cookies from AsyncStorage:', error);
      }
    };
    loadCookies();
  }, []);

  const setCookie = async (name: string, value: string) => {
    try {
      await AsyncStorage.setItem(name, value);
      setCookies(prev => ({ ...prev, [name]: value }));
    } catch (error) {
      console.error('Error setting cookie in AsyncStorage:', error);
    }
  };

  const getCookie = (name: string): string | undefined => {
    return cookies[name];
  };

  const removeCookie = async (name: string) => {
    try {
      await AsyncStorage.removeItem(name);
      setCookies(prev => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    } catch (error) {
      console.error('Error removing cookie from AsyncStorage:', error);
    }
  };

  return { cookies, setCookie, getCookie, removeCookie };
}