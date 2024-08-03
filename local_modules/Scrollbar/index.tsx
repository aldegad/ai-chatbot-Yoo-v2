import { ScrollbarElementProps } from '@local_modules/Scrollbar/Scrollbar.type';
import { Platform } from 'react-native';

const Scrollbar: React.FC<ScrollbarElementProps> = Platform.select({
  web: () => require('./Scrollbar.web').default,
  default: () => require('./Scrollbar.native').default,
})();

export default Scrollbar;