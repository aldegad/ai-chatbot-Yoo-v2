import { NativeSyntheticEvent, StyleSheet, TextInputChangeEventData } from "react-native";

export type InputProps = {
  control?: any;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  style?: any;
  value?: any;
  type?: InputType | InputDateType;
  returnKeyType?: InputReturnKeyType;
  onChange?: (e:InputOnChange) => void;
  onEnter?: any;
  onFocus?: any;
  keyboardType?: InputKeyboardType;
}

export type InputType = 'text'|'email'|'url'|'number'|'float'|'tel'|'password'|'checkbox'|'radio'|'file'|'date'|'time'|'datetime-local'|'year'|'month'|'price';
export type InputDateType = 'date'|'time'|'datetime-local'|'year'|'month';
export type InputKeyboardType = 'default'|'email-address'|'number-pad'|'numeric'|'decimal-pad'|'phone-pad'|'url';
export type InputReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';

export type InputOnChange = {
  native?: NativeSyntheticEvent<TextInputChangeEventData>,
  web?: React.ChangeEvent<HTMLInputElement>,
  instance: {
    value: any;
  }
}

export const styles = StyleSheet.create({
  input: {
    borderColor: '#dfdfdf',
    borderWidth: 1,
    height: 38,
    width: 148,
    textAlign: 'left',
    padding: 8,
    fontSize: 16,
    borderRadius: 8
  }
});
