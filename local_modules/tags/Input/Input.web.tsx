
import { normalizeStyles } from '@local_modules/tags/normalize';
import { InputElementProps } from '@local_modules/tags/type';
import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';

export default function WebInput({ 
  style, 
  onChange, 
  onEnter,
  ...inputProps
}: InputElementProps) {
  const flattenStyle = StyleSheet.flatten([normalizeStyles.input, style]);
  
  const onInputChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({
      web: e,
      instance: {
        value: e.target.value,
      },
    });
  }, [onChange]);

  const onInputEnter = useCallback((e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter')
    onEnter?.({
      web: e,
      instance: {
        value: (e.target as any).value,
      }
    });
  }, [onChange]);
  
  return <input 
    style={flattenStyle}
    onChange={onInputChange}
    onKeyUp={onInputEnter}
    {...inputProps}></input>;
}