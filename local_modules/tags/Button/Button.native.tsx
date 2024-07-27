import React, { useCallback, useMemo } from 'react';
import { StyleSheet, GestureResponderEvent, Pressable } from 'react-native';
import { splitStyles, wrapTextNodesNative } from '@local_modules/tags/styleUtils.native';
import { ButtonProps } from '@local_modules/tags/Button/Button.type';
import { normalizeStyles } from '@local_modules/tags/normalize';

const Button = ({ children, style, onClick }:ButtonProps) => {
  const flattenedStyle = StyleSheet.flatten([normalizeStyles.button, style]);
  const { textStyle, viewStyle } = useMemo(() => splitStyles(flattenedStyle), [flattenedStyle]);

  const wrappedChildren = useMemo(() => wrapTextNodesNative(children, textStyle), [children, textStyle]);

  const onButtonClick = useCallback((e:GestureResponderEvent) => {
    onClick?.({
      native: e,
      instance: null
    });
  }, [onClick]);

  return <Pressable style={viewStyle as any} onPress={onButtonClick}>{wrappedChildren}</Pressable>;
};

export default Button;
