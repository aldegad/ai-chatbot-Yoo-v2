import Input from '@local_modules/tags/Input';
import Span from '@local_modules/tags/Span';
import React, { ReactNode } from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';

const textStyles = ['fontSize', 'color', 'fontWeight', 'lineHeight', 'textAlign', 'fontFamily'];

export const splitStyles = (style: any): { textStyle: TextStyle; viewStyle: ViewStyle } => {
  const textStyle: TextStyle = {};
  const viewStyle: ViewStyle = {};
  if(!style) return { textStyle, viewStyle };

  Object.keys(style).forEach((key) => {
    if (textStyles.includes(key)) {
      (textStyle as any)[key] = style[key];
    } else {
      (viewStyle as any)[key] = style[key];
    }
  });

  return { textStyle, viewStyle };
};

export const wrapTextNodesNative = (children: ReactNode, textStyle: TextStyle): any => {
  return React.Children.map(children, (child) => {
    // 없는애들은 없애버린다.
    if(child === undefined || child === null || child === '') return;
    
    if (React.isValidElement(child)) {
      // TextInput이면 텍스트 스타일을 적용하지 않음
      if (child.type === Input) {
        return child;
      }
      const { fontWeight, ...otherStyles } = textStyle;
      const fontFamily = fontWeight || undefined;

      const newStyle = [{ fontFamily }, otherStyles, child.props.style];
      const newChildren = wrapTextNodesNative(child.props.children, textStyle);
      return React.cloneElement<any>(child, { style: newStyle }, newChildren);
    }
    return <Text style={textStyle}>{child}</Text>;
  });
}