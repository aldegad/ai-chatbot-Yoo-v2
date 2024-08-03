export type CookieOptions = {
  expires?: Date;
  path?: string;
}
export type CookieManager = {
  set: (name: string, value: string, options?: CookieOptions) => Promise<void>;
  get: (name: string) => Promise<string | null>;
  remove: (name: string) => Promise<void>;
  getAll: () => Promise<{ [key: string]: string }>;
  clear: () => Promise<void>;
}