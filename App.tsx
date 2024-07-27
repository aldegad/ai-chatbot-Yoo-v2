// App.tsx (Expo)
import React from 'react';
import NextJsPage from './app/index';
import NextNative from '@local_modules/NextNative';
import appTheme from 'theme';

export default function App() {
  return (
  <NextNative theme={appTheme}>
    <NextJsPage />
  </NextNative>
  );
}