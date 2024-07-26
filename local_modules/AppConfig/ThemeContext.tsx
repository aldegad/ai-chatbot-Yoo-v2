// ThemeContext.tsx
import FontConfig from '@local_modules/AppConfig/FontConfig';
import React, { createContext, useContext, ReactNode } from 'react';

export interface ThemeContextType {
  [key: string]: any; // 기본적으로 any 타입을 사용
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  theme: ThemeContextType;
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = <T extends ThemeContextType>() => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context as T;
};
