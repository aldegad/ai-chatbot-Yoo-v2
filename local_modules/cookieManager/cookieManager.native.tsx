import { CookieManager } from '@local_modules/cookieManager/cookieManager.type';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function nativeCookieManager():CookieManager {
  return {
    set: async (name: string, value: string): Promise<void> => {
      try {
        await AsyncStorage.setItem(name, value);
      } catch (error) {
        console.error('Error setting cookie in AsyncStorage:', error);
      }
    },
    get: async (name: string): Promise<string | null> => {
      try {
        return await AsyncStorage.getItem(name);
      } catch (error) {
        console.error('Error getting cookie from AsyncStorage:', error);
        return null;
      }
    },
    remove: async (name: string): Promise<void> => {
      try {
        await AsyncStorage.removeItem(name);
      } catch (error) {
        console.error('Error removing cookie from AsyncStorage:', error);
      }
    },
    getAll: async (): Promise<{ [key: string]: string }> => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const result = await AsyncStorage.multiGet(keys);
        return result.reduce((acc, [key, value]) => {
          if (value) acc[key] = value;
          return acc;
        }, {} as { [key: string]: string });
      } catch (error) {
        console.error('Error loading all cookies from AsyncStorage:', error);
        return {};
      }
    },
    clear: async (): Promise<void> => {
      try {
        await AsyncStorage.clear();
      } catch (error) {
        console.error('Error clearing all cookies from AsyncStorage:', error);
      }
    }
  }
}