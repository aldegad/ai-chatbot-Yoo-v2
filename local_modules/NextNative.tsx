import AppConfig from '@local_modules/AppConfig';
import { ThemeContextType, ThemeProvider } from '@local_modules/AppConfig/ThemeContext';
import React, { ReactNode } from 'react';

const NextNative:React.FC<{ theme:ThemeContextType, children:ReactNode }> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppConfig>
        {children}
      </AppConfig>
    </ThemeProvider>
  )
}

export default NextNative;