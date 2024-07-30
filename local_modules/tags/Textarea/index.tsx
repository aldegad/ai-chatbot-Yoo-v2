

import { InputElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const Textarea: React.FC<InputElementProps> = Platform.select({
  web: () => require('./Textarea.web').default,
  default: () => require('./Textarea.native').default,
})();

export default Textarea;

Textarea.displayName = 'Textarea';