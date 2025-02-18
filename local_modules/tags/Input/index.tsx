
// tags/Input/index.tsx
import React from 'react';
import { Platform } from 'react-native';
import { InputElement, InputElementProps } from '@local_modules/tags/type';

const Input = React.forwardRef<InputElement, InputElementProps>((props, ref) => {
  const InputComponent = Platform.select({
    web: () => require('./Input.web').default,
    default: () => require('./Input.native').default,
  })();

  return <InputComponent {...props} ref={ref} />;
});

Input.displayName = 'Input';
export default Input;
