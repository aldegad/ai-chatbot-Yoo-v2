export type CookieOptions = {
  expires?: Date;
  path?: string;
}
export type useCookiesHook = {
  cookies: { [key: string]: string };
  setCookie: (name: string, value: string, options?: CookieOptions) => void;
  getCookie: (name: string) => string | undefined;
  removeCookie: (name: string) => void;
}