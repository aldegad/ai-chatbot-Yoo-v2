import FontConfig from '@local_modules/AppConfig/FontConfig';
import { ThemeContextType, ThemeProvider } from '@local_modules/AppConfig/ThemeContext';
import React, { ReactNode } from 'react';

const NextNative:React.FC<{ theme:ThemeContextType, children:ReactNode }> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FontConfig/>
      {children}
    </ThemeProvider>
  )
}

export default NextNative;