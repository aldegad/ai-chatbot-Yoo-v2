
import { normalizeStyles } from '@local_modules/tags/normalize';
import { InputElementProps } from '@local_modules/tags/type';
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleSheet, TextInput, TextInputChangeEventData, TextInputSubmitEditingEventData } from 'react-native';

const NativeInput = forwardRef<TextInput, InputElementProps>(({ 
  style, 
  onChange, 
  onEnter,
  type,
  ...rest
}, ref) => {
  const flattenStyle = StyleSheet.flatten(style);

  const onInputChange = useCallback((e:NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange?.({
      native: e,
      instance: {
        value: e.nativeEvent.text
      },
    })
  }, [onChange])

  const onInputEnter = useCallback((e:NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    onEnter?.({
      native: e,
      instance: {
        value: e.nativeEvent.text
      }
    })
  }, [onChange])

  const [keyboardType, setKeyboardType] = useState<KeyboardTypeOptions>("default")
  const [secureTextEntry, setSecureTextEntry] = useState(false)

  useEffect(() => {
    if(type == 'password') {
      setSecureTextEntry(true)
    } else {
      setSecureTextEntry(false)
    }

    if(type === 'email') {
      setKeyboardType('email-address')
    } else {
      setKeyboardType('default')
    }
  }, [type])
  
  return (
    <TextInput
      ref={ref}
      cursorColor={flattenStyle.cursorColor}
      selectionColor={flattenStyle.cursorColor}
      selectionHandleColor={flattenStyle.cursorColor}
      style={[normalizeStyles.input, style]}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onChange={onInputChange}
      onSubmitEditing={onInputEnter}
      {...rest}></TextInput>
  )
})
export default NativeInput;