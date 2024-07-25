import { InputProps, styles } from '@local_modules/tags/Input/Input.config';
import React, { useCallback } from 'react';

const Input = ({ 
  control, 
  style, 
  onChange, 
  onEnter,
  ...inputProps
}: InputProps) => {

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
    style={{ ...styles.input, ...style }}
    onChange={onInputChange}
    onKeyUp={onInputEnter}
    {...inputProps}></input>;
};

export default Input;