import React from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface NativeMixedStyle {
  [key: string]: ViewStyle & TextStyle;
}

function parseShorthand(styleValue: any): { top: string | number, right?: string | number, bottom?: string | number, left?: string | number } {
  if(typeof styleValue !== 'string') {
    return { top: styleValue };
  }
  const styleValues = styleValue.split(' ').map(v => {
    if (v.endsWith('%')) {
      return v; // 퍼센트 값은 그대로 유지
    } else {
      return parseFloat(v.replace(/[^0-9.]/g, '')); // 숫자 값으로 변환
    }
  });

  switch (styleValues.length) {
    case 1:
      return { top: styleValues[0], right: styleValues[0], bottom: styleValues[0], left: styleValues[0] };
    case 2:
      return { top: styleValues[0], right: styleValues[1], bottom: styleValues[0], left: styleValues[1] };
    case 3:
      return { top: styleValues[0], right: styleValues[1], bottom: styleValues[2], left: styleValues[1] };
    case 4:
      return { top: styleValues[0], right: styleValues[1], bottom: styleValues[2], left: styleValues[3] };
    default:
      return { top: 0, right: 0, bottom: 0, left: 0 };
  }
}

function createStyle<T extends { [key: string]: React.CSSProperties }>(styles: T): { [P in keyof T]: NativeMixedStyle } {
  const nativeMixedStyles: NativeMixedStyle = {};
  
  for (const styleClassName in styles) {
    const style = styles[styleClassName];

    const nativeMixedStyle: ViewStyle & TextStyle = {};

    for (const key in style) {
      const styleValue = style[key];

      if (key === 'padding' || key === 'margin') {
        const { top, right, bottom, left } = parseShorthand(styleValue);
        (nativeMixedStyle as any)[`${key}Top`] = top;
        (nativeMixedStyle as any)[`${key}Right`] = right;
        (nativeMixedStyle as any)[`${key}Bottom`] = bottom;
        (nativeMixedStyle as any)[`${key}Left`] = left;
      } else if (key === 'gap') {
        const { top, right } = parseShorthand(styleValue);
        (nativeMixedStyle as any).rowGap = top;
        (nativeMixedStyle as any).columnGap = right ?? top;
      } else {
        (nativeMixedStyle as any)[key] = styleValue;
      }
    }

    console.log(styleClassName, nativeMixedStyle);

    nativeMixedStyles[styleClassName] = nativeMixedStyle;
  }

  return StyleSheet.create(nativeMixedStyles) as { [P in keyof T]: NativeMixedStyle };
}

export default createStyle;