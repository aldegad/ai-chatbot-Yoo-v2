import { Platform } from "react-native"

export const color = {
  primary: '#8A6BF4',
  text: '#313131'
}

export const font = Platform.OS === 'web' ? require('./theme.web').default : require('./theme.native').default;
export const borderRadius = {
  base: 16
}

const AppTheme = { color, font };
export type AppThemeProps = typeof AppTheme;
export default AppTheme;