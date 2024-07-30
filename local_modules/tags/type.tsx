import { ReactNode } from "react";
import { GestureResponderEvent, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";

/** default elements */
export type ElementProps = {
  children?: ReactNode;
  style?: React.CSSProperties;
  onClick?: (e:ElementClickEvent) => void;
}

export type ElementClickEvent = {
  native?: GestureResponderEvent,
  web?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  instance: any
}

/** button */
export type ButtonElementProps = ElementProps & {

}

/** inputs */
export type InputElementProps = {
  control?: any;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  style?: any;
  value?: any;
  type?: InputType;
  maxLength?: number;
  returnKeyType?: InputReturnKeyType;
  onChange?: (e:InputElementChangeEvent) => void;
  onEnter?: any;
  onFocus?: any;
  keyboardType?: InputKeyboardType;
}

export type InputType = 
  // text & number
  'text'|'email'|'url'|'number'|'float'|'tel'|'password'|'checkbox'|'radio'|'file'|'date'|'time'|'datetime-local'|'year'|'month'|'price'|
  // date
  'date'|'time'|'datetime-local'|'year'|'month';
export type InputKeyboardType = 'default'|'email-address'|'number-pad'|'numeric'|'decimal-pad'|'phone-pad'|'url';
export type InputReturnKeyType = 'done' | 'go' | 'next' | 'search' | 'send';

export type InputElementChangeEvent = {
  native?: NativeSyntheticEvent<TextInputChangeEventData>,
  web?: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>,
  instance: {
    value: any;
  }
}