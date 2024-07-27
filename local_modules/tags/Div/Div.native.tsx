import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { splitStyles, wrapTextNodesNative } from '@local_modules/tags/styleUtils.native';
import { DivProps } from '@local_modules/tags/Div/Div.type';

const Div = ({ children, style }:DivProps) => {
  const flattenedStyle = StyleSheet.flatten(style);
  const { textStyle, viewStyle } = useMemo(() => splitStyles(flattenedStyle), [flattenedStyle]);

  const wrappedChildren = useMemo(() => wrapTextNodesNative(children, textStyle), [children, textStyle]);

  return <View style={viewStyle}>{wrappedChildren}</View>;
};

export default Div;
