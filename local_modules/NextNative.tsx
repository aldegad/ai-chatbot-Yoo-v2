import FontConfig from '@local_modules/AppConfig/FontConfig';
import { ThemeContextType, ThemeProvider } from '@local_modules/AppConfig/ThemeContext';
import { ModalProvider } from '@local_modules/useModal';
import React, { ReactNode } from 'react';

const NextNative:React.FC<{ theme:ThemeContextType, children:ReactNode }> = ({ theme, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <FontConfig/>
        {children}
      </ModalProvider>
    </ThemeProvider>
  )
}

export default NextNative;