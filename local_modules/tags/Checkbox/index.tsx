
import { CheckboxElementProps, InputElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const Checkbox: React.FC<CheckboxElementProps> = Platform.select({
  web: () => require('./Checkbox.web').default,
  default: () => require('./Checkbox.native').default,
})();

Checkbox.displayName = 'Checkbox';
export default Checkbox;
