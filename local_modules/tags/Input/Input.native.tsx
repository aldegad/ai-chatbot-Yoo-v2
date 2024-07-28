import { InputProps } from '@local_modules/tags/Input/Input.types';
import { normalizeStyles } from '@local_modules/tags/normalize';
import { useCallback } from 'react';
import { NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';

const Input = ({ 
  control, 
  style, 
  onChange, 
  onEnter,
  ...inputProps
}: InputProps) => {
  const onInputChange = useCallback((e:NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange?.({
      native: e,
      instance: {
        value: e.nativeEvent.text,
      },
    });
  }, [onChange]);

  return <TextInput 
    style={[normalizeStyles.input, style]}
    onChange={onInputChange}
    onSubmitEditing={e => onEnter()}
    {...inputProps}></TextInput>;
};

export default Input;