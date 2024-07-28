import { LinkProps as NextLinkProps } from "expo-router/build/link/Link";
import { LinkProps as ExpoLinkProps } from "next/link";

export type LinkProps = NextLinkProps | ExpoLinkProps;