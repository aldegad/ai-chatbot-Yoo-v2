import { AppConfigProps } from '@local_modules/AppConfig/AppConfig.type';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export const AppConfig = ({ children }:AppConfigProps) => {
  const [loaded, error] = useFonts({
    '100': require('../../assets/fonts/Pretendard-Thin.otf'),
    '200': require('../../assets/fonts/Pretendard-ExtraLight.otf'),
    '300': require('../../assets/fonts/Pretendard-Light.otf'),
    '400': require('../../assets/fonts/Pretendard-Regular.otf'),
    '500': require('../../assets/fonts/Pretendard-Medium.otf'),
    '600': require('../../assets/fonts/Pretendard-SemiBold.otf'),
    '700': require('../../assets/fonts/Pretendard-Bold.otf'),
    '800': require('../../assets/fonts/Pretendard-ExtraBold.otf'),
    '900': require('../../assets/fonts/Pretendard-Black.otf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return children;
}

export default AppConfig;