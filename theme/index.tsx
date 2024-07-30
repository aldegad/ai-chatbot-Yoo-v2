import { Platform } from "react-native"

export const color = {
  primary: 'rgb(138, 107, 244)',
  text: '#313131',
  backdrop: 'rgba(138, 107, 244, 0.5)'
}

export const font = Platform.OS === 'web' ? require('./theme.web').default : require('./theme.native').default;
export const borderRadius = {
  base: 16
}

const AppTheme = { color, font };
export type AppThemeProps = typeof AppTheme;
export default AppTheme;