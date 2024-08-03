import { ReactNode } from "react";

export type ScrollbarElementProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  vertical?: boolean;
  horizontal?: boolean;
}