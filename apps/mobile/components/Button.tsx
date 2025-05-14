import {
  Button as ButtonBase,
  ButtonProps as ButtonBaseProps,
} from "react-native";

interface ButtonProps extends ButtonBaseProps {
  kind?: "cta";
}

export function Button({ title, accessibilityLabel, ...props }: ButtonProps) {
  return (
    <ButtonBase
      {...props}
      title={title}
      accessibilityLabel={accessibilityLabel ?? title}
    />
  );
}
