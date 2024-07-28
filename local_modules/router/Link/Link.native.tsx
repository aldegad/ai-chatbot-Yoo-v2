import { Link } from "expo-router";
import { LinkProps } from "expo-router/build/link/Link";

export default function NativeLink(props:LinkProps) {
  return <Link {...props}/>
}