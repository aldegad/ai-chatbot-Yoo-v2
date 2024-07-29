import { ElementProps } from '@local_modules/tags/type';
import { Platform } from 'react-native';

const P: React.FC<ElementProps> = Platform.select({
  web: () => require('./P.web').default,
  default: () => require('./P.native').default,
})();

export default P;