import React from 'react';
import { Text, TextStyle } from 'react-native';
import { SpanProps } from '@local_modules/tags/Span/Span.type';

export default function NativeSpan({ children, style }: SpanProps) {
  return <Text style={style as TextStyle}>{children}</Text>;
}