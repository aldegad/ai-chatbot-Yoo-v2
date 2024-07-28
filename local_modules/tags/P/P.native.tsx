import React from 'react';
import { View } from 'react-native';
import { useStyledElementForNative } from '@local_modules/tags/styleUtils.native';
import { normalizeStyles } from '@local_modules/tags/normalize';
import { ElementProps } from '@local_modules/tags/type';

export default function NativeH1({ children, style }: ElementProps) {
  const { viewStyle, styledChildren } = useStyledElementForNative({
    styles: [normalizeStyles.p, style],
    children,
  })
  return <View style={viewStyle}>{styledChildren}</View>;
}