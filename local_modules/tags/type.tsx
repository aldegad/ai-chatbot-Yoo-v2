import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export type ElementProps = {
  children?: ReactNode;
  style?: React.CSSProperties;
  onClick?: (e:ElementClickEvent) => void;
}

export type ButtonElementProps = ElementProps & {

}

export type ElementClickEvent = {
  native?: GestureResponderEvent,
  web?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  instance: any
}