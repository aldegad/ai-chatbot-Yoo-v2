import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

export type ButtonProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  onClick?: (e:ButtonOnClick) => void
}

export type ButtonOnClick = {
  native?: GestureResponderEvent,
  web?: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  instance: any
}