import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useTheme } from "@local_modules/AppConfig/ThemeContext"
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const FontConfig = () => {
  const { font } = useTheme();
  if(!font) return null;
  
  const [loaded, error] = useFonts(font);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return null;
}

export default FontConfig;