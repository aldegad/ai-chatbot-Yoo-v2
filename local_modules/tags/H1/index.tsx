import { Platform } from 'react-native';

const H1 = Platform.select({
  web: () => require('./H1.web').default,
  default: () => require('./H1.native').default,
})();

export default H1;