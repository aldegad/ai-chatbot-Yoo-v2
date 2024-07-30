import Input from '@local_modules/tags/Input';
import { normalizeStyles } from '@local_modules/tags/normalize';
import Textarea from '@local_modules/tags/Textarea';
import { ButtonElementProps, ElementProps } from '@local_modules/tags/type';
import React, { ReactNode, useCallback, useMemo } from 'react';
import { GestureResponderEvent, StyleSheet, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';

const textStyles = ['fontSize', 'color', 'fontWeight', 'lineHeight', 'textAlign', 'fontFamily'];

const splitStyles = (style: any): { textStyle: TextStyle; viewStyle: ViewStyle } => {
  const textStyle: TextStyle = {};
  const viewStyle: ViewStyle = {};
  if(!style) return { textStyle, viewStyle };

  Object.keys(style).forEach((key) => {
    if (textStyles.includes(key)) {
      (textStyle as any)[key] = style[key];
    } else {
      (viewStyle as any)[key] = style[key];
    }
  });

  return { textStyle, viewStyle };
}

const wrapTextNodes = (children: ReactNode, textStyle: TextStyle): any => {
  return React.Children.map(children, (child) => {
    // 없는애들은 없애버린다.
    if(child === undefined || child === null || child === '') return;
    
    if (React.isValidElement(child)) {
      // TextInput이면 텍스트 스타일을 적용하지 않음
      // console.log(child.type, child.props.style);
      if (child.type === Input || child.type === Textarea) {
        return child;
      }

      const { fontWeight, ...otherStyles } = textStyle;
      const fontFamily = fontWeight || undefined;

      const newStyle = [{ fontFamily }, otherStyles, child.props.style];
      // const newChildren = wrapTextNodes(child.props.children, textStyle);
      return React.cloneElement<any>(child, { style: newStyle });
    }
    return <Text style={textStyle}>{child}</Text>;
  });
}

type UseStyledElementProps = {
  styles: any[];
  children: ReactNode;
}

type StyledElementResult = {
  viewStyle: ViewStyle;
  styledChildren: ReactNode;
}

const useStyledElement = ({ styles, children }:UseStyledElementProps):StyledElementResult => {
  const flattenedStyle = StyleSheet.flatten(styles);

  const { textStyle, viewStyle } = useMemo(() => splitStyles(flattenedStyle), [flattenedStyle]);
  const styledChildren = useMemo(() => wrapTextNodes(children, textStyle), [children, textStyle]);

  return { viewStyle, styledChildren };
}

export function useNativeElement(tag:string, props: ElementProps|ButtonElementProps) {
  const { children, style, onClick } = props;

  const { viewStyle, styledChildren } = useStyledElement({
    styles: [(normalizeStyles as any)[tag], style],
    children,
  });

  const onElementClick = useCallback((e: GestureResponderEvent) => {
    onClick?.({
      native: e,
      instance: null,
    });
  }, [onClick]);

  if (onClick) {
    return (
      <TouchableWithoutFeedback onPress={onElementClick}>
        <View style={viewStyle}>{styledChildren}</View>
      </TouchableWithoutFeedback>
    )
  } else {
    return <View style={viewStyle}>{styledChildren}</View>;
  }
}