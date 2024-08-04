
import { ButtonElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const Button: React.FC<ButtonElementProps> = Platform.select({
  web: () => require('./Button.web').default,
  default: () => require('./Button.native').default,
})();

export default Button;