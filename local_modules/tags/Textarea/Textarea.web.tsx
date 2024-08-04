import { normalizeStyles } from '@local_modules/tags/normalize';
import { InputElementProps } from '@local_modules/tags/type';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

export default function WebTextarea({ 
  style, 
  onChange, 
  onEnter,
  ...inputProps
}: InputElementProps) {

  const flattenedStyle = StyleSheet.flatten(style);

  const onTextareaChange = useCallback((e:React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.({
      web: e,
      instance: {
        value: e.target.value,
      },
    });
  }, [onChange]);

  const onTextareaEnter = useCallback((e:React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.key === 'Enter')
    onEnter?.({
      web: e,
      instance: {
        value: (e.target as any).value,
      }
    });
  }, [onChange]);
  
  return <textarea 
    style={{ ...normalizeStyles.input, ...flattenedStyle }}
    onChange={onTextareaChange}
    onKeyUp={onTextareaEnter}
    {...inputProps}></textarea>;
}