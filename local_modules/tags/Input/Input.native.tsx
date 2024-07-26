import { InputProps, styles } from '@local_modules/tags/Input/Input.config';
import { useCallback } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = ({ 
  control, 
  style, 
  onChange, 
  onEnter,
  ...inputProps
}: InputProps) => {
  const onInputChange = useCallback((e:any) => {
    onChange?.({
      native: e,
      instance: {
        value: e.nativeEvent.text,
      },
    });
  }, [onChange]);

  return <TextInput 
    style={[styles.input, style]}
    onChange={onInputChange}
    onSubmitEditing={e => onEnter()}
    {...inputProps}></TextInput>;
};

export default Input;