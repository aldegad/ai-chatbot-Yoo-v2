import { CookieManager } from '@local_modules/cookieManager/cookieManager.type';
import { Platform } from 'react-native';

const cookieManager: () => CookieManager = Platform.select({
  web: () => require('./cookieManager.web').default,
  default: () => require('./cookieManager.native').default,
})();

export default cookieManager;