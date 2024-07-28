import { LinkProps } from '@local_modules/router/Link/Link.type';
import React from 'react';
import { Platform } from 'react-native';

const Link: React.FC<LinkProps> = Platform.select({
  web: () => require('./Link.web').default,
  default: () => require('./Link.native').default,
})();

export default Link;