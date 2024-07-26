import { Platform } from 'react-native';

const FontConfig = Platform.select({
  web: () => require('./FontConfig.web').default as React.ComponentType<any>,
  default: () => require('./FontConfig.native').default as React.ComponentType<any>,
})();

export default FontConfig;