import { useLightDark } from "@/constants/theme";
import { Link as ERLink, LinkProps as ERLinkProps } from "expo-router";

export function Link({ children, style, ...props }: ERLinkProps) {
  const color = useLightDark("text");
  return (
    <ERLink {...props} style={[{ color }, style]}>
      {children}
    </ERLink>
  );
}
