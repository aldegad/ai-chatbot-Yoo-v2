import { Platform } from 'react-native';

const Span = Platform.select({
  web: () => require('./Span.web').default,
  default: () => require('./Span.native').default,
})();

export default Span;