import { LinkProps } from '@local_modules/router/Link/Link.type';
import { Platform } from 'react-native';

const Link = Platform.select({
  web: () => require('./Link.web').default,
  default: () => require('./Link.native').default,
})();

export default Link;