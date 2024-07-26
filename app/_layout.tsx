// App.tsx (Expo)
import React from 'react';
import NextJsPage from '../pages'; // Next.js 페이지를 가져옵니다
import NextNative from '@local_modules/NextNative';
import appTheme from 'theme';
import { Stack } from 'expo-router';

export default function App() {
  return (
  <NextNative theme={appTheme}>
    <Stack>
      <Stack.Screen name="index"></Stack.Screen>
      <Stack.Screen name="chat"></Stack.Screen>
      {/* <NextJsPage /> */}
    </Stack>
  </NextNative>
  );
}