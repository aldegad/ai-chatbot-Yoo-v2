import { Platform } from 'react-native';

const Br = Platform.select({
  web: () => require('./Br.web').default,
  default: () => require('./Br.native').default,
})();

export default Br;