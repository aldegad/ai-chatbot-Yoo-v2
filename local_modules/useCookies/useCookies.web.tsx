import { CookieOptions, useCookiesHook } from '@local_modules/useCookies/useCookies.type';
import { useState, useEffect } from 'react';

export default function useWebCookies(): useCookiesHook {
  const [cookies, setCookies] = useState<{[key: string]: string}>({});

  useEffect(() => {
    const allCookies = document.cookie.split('; ').reduce((acc, current) => {
      const [name, value] = current.split('=');
      acc[name] = decodeURIComponent(value);
      return acc;
    }, {} as {[key: string]: string});
    setCookies(allCookies);
  }, []);

  const setCookie = (name: string, value: string, options: CookieOptions = {}) => {
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    if (options.expires) {
      updatedCookie += "; expires=" + options.expires.toUTCString();
    }
    if (options.path) {
      updatedCookie += "; path=" + options.path;
    }
    document.cookie = updatedCookie;
    setCookies(prev => ({ ...prev, [name]: value }));
  };

  const getCookie = (name: string): string | undefined => {
    return cookies[name];
  };

  const removeCookie = (name: string) => {
    document.cookie = name + '=; Max-Age=-99999999;';
    setCookies(prev => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  };

  return { cookies, setCookie, getCookie, removeCookie };
}