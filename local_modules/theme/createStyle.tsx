import React from "react";
import { StyleSheet } from "react-native";
import { NativeMixedStyle } from './types';
import { parseShorthand } from './parseShorthand';
import { parseBoxShadow } from './parseBoxShadow';

function createStyle<T extends { [key: string]: React.CSSProperties }>(styles: T): { [P in keyof T]: NativeMixedStyle } {
  const nativeMixedStyles: NativeMixedStyle = {};
  
  for (const styleClassName in styles) {
    const style = styles[styleClassName];
    const nativeMixedStyle: NativeMixedStyle = {};

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
      } else if (key === 'boxShadow') {
        Object.assign(nativeMixedStyle, parseBoxShadow(styleValue as string));
      } else {
        (nativeMixedStyle as any)[key] = styleValue;
      }
    }

    nativeMixedStyles[styleClassName] = nativeMixedStyle;
  }

  return StyleSheet.create(nativeMixedStyles) as { [P in keyof T]: NativeMixedStyle };
}

export default createStyle;