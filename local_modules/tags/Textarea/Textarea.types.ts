import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData } from "react-native";

export type TextareaElementProps = {
  control?: any;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  style?: any;
  value?: any;
  type?: InputType | InputDateType;
  returnKeyType?: InputReturnKeyType;
  onChange?: (e:TextareaElementChangeEvent) => void;
  onEnter?: any;
  onFocus?: any;
  keyboardType?: InputKeyboardType;
}

export type InputType = 'text'|'email'|'url'|'number'|'float'|'tel'|'password'|'checkbox'|'radio'|'file'|'date'|'time'|'datetime-local'|'year'|'month'|'price';
export type InputDateType = 'date'|'time'|'datetime-local'|'year'|'month';
export type InputKeyboardType = 'default'|'email-address'|'number-pad'|'numeric'|'decimal-pad'|'phone-pad'|'url';
export type InputReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';

export type TextareaElementChangeEvent = {
  native?: NativeSyntheticEvent<TextInputChangeEventData>,
  web?: React.ChangeEvent<HTMLTextAreaElement>,
  instance: {
    value: any;
  }
}