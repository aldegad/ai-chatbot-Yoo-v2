import { Platform } from 'react-native';

const Div = Platform.select({
  web: () => require('./Div.web').default,
  default: () => require('./Div.native').default,
})();

export default Div;