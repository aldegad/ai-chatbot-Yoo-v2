import { Platform } from 'react-native';

const useParams = Platform.select({
  web: () => require('./useParams.web').default,
  default: () => require('./useParams.native').default,
})();

export default useParams;