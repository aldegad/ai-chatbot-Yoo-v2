
import { useState, useCallback, useRef, createRef } from 'react'
import { InputElement, InputElementChangeEvent } from '@local_modules/tags/type'

interface FormFields {
  [key: string]: any
}

interface FormControl {
  value: any
  onChange: (e: InputElementChangeEvent) => void
  ref: React.RefObject<InputElement>
  onEnter: (e:any) => void
}

export default function useFormModel<T extends FormFields>(initialState: T): [T, (name: keyof T) => FormControl] {
  const [fields, setFields] = useState<T>(initialState)
  const fieldsRef = useRef<{ [K in keyof T]: React.RefObject<any> }>({} as any)
  const fieldsOrder = useRef<(keyof T)[]>(Object.keys(initialState) as (keyof T)[])

  // 각 필드에 대한 ref 생성
  Object.keys(initialState).forEach((name:keyof T) => {
    if (!fieldsRef.current[name]) {
      fieldsRef.current[name] = createRef()
    }
  })


  const onFieldChange = useCallback((name: keyof T, value: string) => {
    setFields(prevFields => ({
      ...prevFields,
      [name]: value
    }))
  }, [])

  const focusNextField = useCallback((currentField: keyof T) => {
    const currentIndex = fieldsOrder.current.indexOf(currentField)
    const nextField = fieldsOrder.current[currentIndex + 1]
    if (nextField) {
      fieldsRef.current[nextField].current?.focus()
    }
  }, []);

  const modelValue = (name: keyof T): FormControl => ({
    value: fields[name],
    onChange: (e) => onFieldChange(name, e.instance.value),
    ref: fieldsRef.current[name],
    onEnter: () => focusNextField(name)
  })

  return [fields, modelValue]
}