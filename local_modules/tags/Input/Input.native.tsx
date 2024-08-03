
import { normalizeStyles } from '@local_modules/tags/normalize';
import { InputElementProps } from '@local_modules/tags/type';
import { useCallback, useEffect, useState } from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, TextInput, TextInputChangeEventData } from 'react-native';

const Input = ({ 
  style, 
  onChange, 
  onEnter,
  type,
  ...rest
}: InputElementProps) => {
  const onInputChange = useCallback((e:NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange?.({
      native: e,
      instance: {
        value: e.nativeEvent.text,
      },
    });
  }, [onChange]);

  const [keyboardType, setKeyboardType] = useState<KeyboardTypeOptions>("default");
  const [secureTextEntry, setSecureTextEntry] = useState(false);

  useEffect(() => {
    if(type == 'password') {
      setSecureTextEntry(true);
    } else {
      setSecureTextEntry(false);
    }

    if(type === 'email') {
      setKeyboardType('email-address');
    } else {
      setKeyboardType('default');
    }
  }, [type])
  
  return <TextInput 
    style={[normalizeStyles.input, style]}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    onChange={onInputChange}
    onSubmitEditing={e => onEnter()}
    {...rest}></TextInput>;
};

export default Input;