import React from 'react';
import { View } from 'react-native';
import { useStyledElementForNative } from '@local_modules/tags/styleUtils.native';
import { ElementProps } from '@local_modules/tags/type';

export default function NativeDiv({ children, style }: ElementProps) {
  const { viewStyle, styledChildren } = useStyledElementForNative({
    styles: [style],
    children,
  })
  return <View style={viewStyle}>{styledChildren}</View>;
}