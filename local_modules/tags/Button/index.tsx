import { ButtonProps } from '@local_modules/tags/Button/Button.type';
import { Platform } from 'react-native';

const Button: React.FC<ButtonProps> = Platform.select({
  web: () => require('./Button.web').default,
  default: () => require('./Button.native').default,
})();

export default Button;