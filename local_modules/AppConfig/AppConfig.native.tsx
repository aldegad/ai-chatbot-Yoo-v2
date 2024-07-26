import { AppConfigProps } from '@local_modules/AppConfig/AppConfig.type';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

export const AppConfig = ({ children }:AppConfigProps) => {
  /* const [loaded, error] = useFonts({
    'Raleway-Regular': require('../../assets/fonts/Raleway-VariableFont_wght.ttf'),
    'Raleway-Bold': require('../../assets/fonts/Raleway-VariableFont_wght.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  } */

  return children;
}

export default AppConfig;