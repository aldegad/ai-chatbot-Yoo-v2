import NextNative from '@local_modules/NextNative';
import AppTheme from '@theme/index';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <NextNative theme={AppTheme}>
      <Stack screenOptions={{ headerShown: true, headerTransparent: true }}/>
    </NextNative>
  );
}