import { AppConfigProps } from '@local_modules/AppConfig/AppConfig.type';
import { Platform } from 'react-native';

const AppConfig = Platform.select({
  web: () => require('./AppConfig.web').default as React.ComponentType<AppConfigProps>,
  default: () => require('./AppConfig.native').default as React.ComponentType<AppConfigProps>,
})();

export default AppConfig;