
import { TextareaElementProps } from '@local_modules/tags/Textarea/Textarea.types';
import { Platform } from 'react-native';

const Textarea: React.FC<TextareaElementProps> = Platform.select({
  web: () => require('./Textarea.web').default,
  default: () => require('./Textarea.native').default,
})();

export default Textarea;

Textarea.displayName = 'Textarea';