import React, { ReactNode, useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import { splitStyles, applyTextStylesRecursively } from '../styleUtils';

type DivProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

const Div = ({ children, style }:DivProps) => {
  const flattenedStyle = StyleSheet.flatten(style);
  const { textStyle, viewStyle } = useMemo(() => splitStyles(flattenedStyle), [flattenedStyle]);

  const styledChildren = applyTextStylesRecursively(children, textStyle);

  return <View style={viewStyle}>{styledChildren}</View>;
};

export default Div;
