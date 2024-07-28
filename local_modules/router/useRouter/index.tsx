import { LinkProps } from '@local_modules/router/Link/Link.type';
import { Platform } from 'react-native';

const useRouter = Platform.select({
  web: () => require('./useRouter.web').default,
  default: () => require('./useRouter.native').default,
})();

export default useRouter;