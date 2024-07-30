
import { InputElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const Input = Platform.select({
  web: () => require('./Input.web').default as React.ComponentType<InputElementProps>,
  default: () => require('./Input.native').default as React.ComponentType<InputElementProps>,
})();

Input.displayName = 'Input';
export default Input;
