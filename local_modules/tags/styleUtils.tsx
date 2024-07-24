import React from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';

const textStyles = ['fontSize', 'color', 'fontWeight', 'lineHeight', 'textAlign', 'fontFamily'];

export const splitStyles = (style: any): { textStyle: TextStyle; viewStyle: ViewStyle } => {
  const textStyle: TextStyle = {};
  const viewStyle: ViewStyle = {};

  Object.keys(style).forEach((key) => {
    if (textStyles.includes(key)) {
      (textStyle as any)[key] = style[key];
    } else {
      (viewStyle as any)[key] = style[key];
    }
  });

  return { textStyle, viewStyle };
};

export const applyTextStylesRecursively = (children: React.ReactNode, textStyle: TextStyle): any => {
  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const newStyle = [child.props.style, textStyle];
      const newChildren = applyTextStylesRecursively(child.props.children, textStyle);
      return React.cloneElement<any>(child, { style: newStyle }, newChildren);
    }
    return <Text style={textStyle}>{child}</Text>;
  });
};
