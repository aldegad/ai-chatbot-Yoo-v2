import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { splitStyles, applyTextStylesRecursively } from '@local_modules/tags/styleUtils';
import { DivProps } from '@local_modules/tags/Div/Div.type';

const Div = ({ children, style }:DivProps) => {
  const flattenedStyle = StyleSheet.flatten(style);
  const { textStyle, viewStyle } = useMemo(() => splitStyles(flattenedStyle), [flattenedStyle]);

  const styledChildren = applyTextStylesRecursively(children, textStyle);

  return <View style={viewStyle}>{styledChildren}</View>;
};

export default Div;
