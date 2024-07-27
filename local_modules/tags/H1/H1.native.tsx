import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { splitStyles, wrapTextNodesNative } from '@local_modules/tags/styleUtils.native';
import { H1Props } from '@local_modules/tags/H1/H1.types';
import { normalizeStyles } from '@local_modules/tags/normalize';

const H1 = ({ children, style }:H1Props) => {
  const flattenedStyle = StyleSheet.flatten([normalizeStyles.h1, style]);
  const { textStyle, viewStyle } = useMemo(() => splitStyles(flattenedStyle), [flattenedStyle]);

  const wrappedChildren = useMemo(() => wrapTextNodesNative(children, textStyle), [children, textStyle]);

  return <View style={viewStyle}>{wrappedChildren}</View>;
};

export default H1;
