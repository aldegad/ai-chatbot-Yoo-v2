import { useCookiesHook } from '@local_modules/useCookies/useCookies.type';
import { Platform } from 'react-native';

const useCookies: () => useCookiesHook = Platform.select({
  web: () => require('./useCookies.web').default,
  default: () => require('./useCookies.native').default,
})();

export default useCookies;