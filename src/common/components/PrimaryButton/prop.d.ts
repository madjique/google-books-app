import { TouchableOpacityProps } from "react-native";

export type PrimaryButtonProps = {
  title : string,
  styleCtn? : ViewStyle,
  styleTxt? : ViewStyle,
  bgColor? : string,
} & TouchableOpacityProps;
