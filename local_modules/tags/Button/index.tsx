import { Platform } from 'react-native';

const Button = Platform.select({
  web: () => require('./Button.web').default,
  default: () => require('./Button.native').default,
})();

export default Button;