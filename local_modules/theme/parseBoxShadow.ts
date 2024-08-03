import { Platform } from 'react-native';
import { ShadowStyle } from './types'

export function parseBoxShadow(boxShadow: string): ShadowStyle {
  if(Platform.OS === 'web') {
    return { boxShadow };
  }
  // 정규 표현식을 사용하여 값을 추출합니다.
  const match = boxShadow.match(/^(\S+)\s+(\S+)\s+(\S+)\s+(rgba?\(.+?\))$/);
  
  if (!match) {
    throw new Error('Invalid box shadow format');
  }

  const [, offsetX, offsetY, blurRadius, color] = match;

  const rgbaMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
  if (!rgbaMatch) {
    throw new Error('Invalid color format');
  }

  const [, r, g, b, a = '1'] = rgbaMatch;
  const opacity = parseFloat(a);

  return {
    shadowColor: `rgb(${r},${g},${b})`,
    shadowOffset: { 
      width: parseFloat(offsetX), 
      height: parseFloat(offsetY) 
    },
    shadowOpacity: opacity,
    shadowRadius: parseFloat(blurRadius) / 2,
    elevation: parseFloat(blurRadius) / 2
  }
}