import { ElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const H2: React.FC<ElementProps> = Platform.select({
  web: () => require('./H2.web').default,
  default: () => require('./H2.native').default,
})();

export default H2;