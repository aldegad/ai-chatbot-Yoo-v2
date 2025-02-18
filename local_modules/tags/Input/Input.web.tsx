
// tags/Input/web.tsx
import { normalizeStyles } from '@local_modules/tags/normalize'
import { InputElementProps } from '@local_modules/tags/type'
import React, { forwardRef, useCallback } from 'react'
import { StyleSheet } from 'react-native'

const WebInput = forwardRef<HTMLInputElement, InputElementProps>(({ 
  style, 
  onChange, 
  onEnter,
  ...inputProps
}, ref) => {
  const flattenStyle = StyleSheet.flatten([normalizeStyles.input, style]);
  
  const onInputChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
    onChange?.({
      web: e,
      instance: {
        value: e.target.value,
      }
    })
  }, [onChange])

  const onInputEnter = useCallback((e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      onEnter?.({
        web: e,
        instance: {
          value: (e.target as any).value,
        }
      })
    }
  }, [onChange])
  
  return (
    <input 
      ref={ref}
      style={flattenStyle}
      onChange={onInputChange}
      onKeyUp={onInputEnter}
      {...inputProps}></input>
  )
})
export default WebInput;