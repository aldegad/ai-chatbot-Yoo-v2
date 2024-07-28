import { InputChangeEvent } from '@local_modules/tags/Input/Input.types';
import { useState, useCallback } from 'react';

interface FormFields {
  [key: string]: any;
}

interface FormControl {
  value: any;
  onChange: (e: InputChangeEvent) => void;
}

export default function useFormModel<T extends FormFields>(initialState: T): [T, (name: keyof T) => FormControl] {
  const [fields, setFields] = useState<T>(initialState);

  const onFieldChange = useCallback((name: keyof T, value: string) => {
    setFields(prevFields => ({
      ...prevFields,
      [name]: value
    }));
  }, []);

  const modelValue = (name: keyof T): FormControl => ({
    value: fields[name],
    onChange: (e) => onFieldChange(name, e.instance.value)
  });

  return [fields, modelValue];
}