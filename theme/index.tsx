import { Platform } from "react-native"

export const appTheme = {
  ...(Platform.OS === 'web' ? require('./theme.web').default : require('./theme.native').default),
  color: {
    primary: '#8A6BF4',
    text: '#313131'
  }
}

export type AppTheme = typeof appTheme;