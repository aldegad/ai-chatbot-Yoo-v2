import React from 'react';
import { Text, TextProps } from 'react-native';

type SpanProps = TextProps & {
  children: React.ReactNode;
};


const Span = ({ children, style }: SpanProps) => {
  return <Text style={style}>{children}</Text>;
};

export default Span;