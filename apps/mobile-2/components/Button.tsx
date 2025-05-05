import {
  Button as ButtonBase,
  ButtonProps as ButtonBaseProps,
} from "react-native";

interface ButtonProps extends ButtonBaseProps {
  kind: "cta";
}

export function Button(props: ButtonProps) {
  return (
    <ButtonBase
      title={props.title}
      accessibilityLabel={props.accessibilityLabel ?? props.title}
    />
  );
}
