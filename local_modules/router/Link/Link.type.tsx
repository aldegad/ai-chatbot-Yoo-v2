import { LinkProps as NativeLinkProps } from "expo-router";
import { LinkProps as WebLinkProps } from "next/link";

export type LinkProps = WebLinkProps | NativeLinkProps<any>;