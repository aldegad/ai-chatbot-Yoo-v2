import { normalizeStyles } from '@local_modules/tags/normalize';
import { InputElementProps } from '@local_modules/tags/type';
import { useCallback } from 'react';
import { TextInput } from 'react-native';

export default function NativeTextarea({ 
  style, 
  onChange, 
  onEnter,
  ...inputProps
}: InputElementProps) {
  const onInputChange = useCallback((e:any) => {
    onChange?.({
      native: e,
      instance: {
        value: e.nativeEvent.text,
      },
    });
  }, [onChange]);

  return <TextInput 
    multiline={true}
    style={[normalizeStyles.input, style]}
    onChange={onInputChange}
    onSubmitEditing={e => onEnter()}
    {...inputProps}></TextInput>;
}