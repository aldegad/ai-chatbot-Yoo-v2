import { Platform } from "react-native"

export const color = {
  primary: 'rgb(138, 107, 244)',
  text: '#313131',
  gray: '#6f6f6f',
  backdrop: '#7360b17f',
  white: 'white'
}

export const font = Platform.OS === 'web' ? require('./theme.web').default : require('./theme.native').default;
export const borderRadius = {
  base: 16
}
export const boxShadow = {
  base: '0px 4px 20px rgba(0, 0, 0, 0.1)'
}

const AppTheme = { color, font };
export type AppThemeProps = typeof AppTheme;
export default AppTheme;