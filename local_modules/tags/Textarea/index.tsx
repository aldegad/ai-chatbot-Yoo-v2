import { InputProps } from '@local_modules/tags/Input/Input.types';
import { Platform } from 'react-native';

const Input = Platform.select({
  web: () => require('./Input.web').default as React.ComponentType<InputProps>,
  default: () => require('./Input.native').default as React.ComponentType<InputProps>,
})();

export default Input;

Input.displayName = 'Input';