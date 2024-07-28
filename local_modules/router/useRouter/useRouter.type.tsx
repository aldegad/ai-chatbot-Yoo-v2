import { LinkProps as WebLinkProps } from "expo-router/build/link/Link";
import { LinkProps as NativeLinkProps } from "next/link";

export type LinkProps = WebLinkProps | NativeLinkProps;