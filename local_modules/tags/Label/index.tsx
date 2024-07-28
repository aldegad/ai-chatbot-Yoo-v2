import { ElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const Label: React.FC<ElementProps> = Platform.select({
  web: () => require('./Label.web').default,
  default: () => require('./Label.native').default,
})();

export default Label;