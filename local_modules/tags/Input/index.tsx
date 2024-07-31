
import { InputElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const Input: React.FC<InputElementProps> = Platform.select({
  web: () => require('./Input.web').default,
  default: () => require('./Input.native').default,
})();

Input.displayName = 'Input';
export default Input;
