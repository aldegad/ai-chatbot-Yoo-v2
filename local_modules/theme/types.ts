import { TextStyle, ViewStyle } from "react-native";

export interface NativeMixedStyle {
  [key: string]: ViewStyle & TextStyle;
}

export interface ShadowStyle {
  shadowColor?: string;
  shadowOffset?: { width: number; height: number };
  shadowOpacity?: number;
  shadowRadius?: number;
  elevation?: number;
  boxShadow?: string;
}