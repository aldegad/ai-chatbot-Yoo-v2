import React from 'react';
import { Text, TextStyle } from 'react-native';
import { ElementProps } from '@local_modules/tags/type';

export default function NativeSpan({ children, style }: ElementProps) {
  return <Text style={style as TextStyle}>{children}</Text>;
}