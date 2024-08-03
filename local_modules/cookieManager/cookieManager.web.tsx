import { CookieManager, CookieOptions } from "@local_modules/cookieManager/cookieManager.type";

const getCookiesFromDocument = () => {
  return document.cookie.split('; ').reduce((acc, current) => {
    const [name, value] = current.split('=');
    acc[name] = decodeURIComponent(value);
    return acc;
  }, {} as { [key: string]: string });
}

export default function webCookieManager():CookieManager {
  return {
    set: async(name: string, value: string, options: CookieOptions = {}) => {
      let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      if (options.expires) {
        updatedCookie += "; expires=" + options.expires.toUTCString();
      }
      if (options.path) {
        updatedCookie += "; path=" + options.path;
      }
      document.cookie = updatedCookie;
    },
    get: async(name: string): Promise<string | null> => {
      const cookies = getCookiesFromDocument();
      return cookies[name] || null;
    },
    remove: async(name: string) => {
      document.cookie = name + '=; Max-Age=-99999999;';
    },
    getAll: async() => {
      return getCookiesFromDocument();
    },
    clear: async() => {
      const cookies = getCookiesFromDocument();
      for (const name in cookies) {
        document.cookie = name + '=; Max-Age=-99999999; path=/;';
      }
    }
  }
}