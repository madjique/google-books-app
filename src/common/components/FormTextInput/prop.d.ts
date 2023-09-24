import { TextInputProps } from "react-native";

export type FormTextInputProps = {
  placeholder : string,
  control : Control<any>,
  name :string,
  styleCtn? :ViewStyle,
  styleTxt? :ViewStyle,
  rules? :RegisterOptions<any,string> // to be tested and fixed
} & TextInputProps;
