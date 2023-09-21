import { React } from "react";
import { ViewProps, ViewStyle } from "react-native";

export type TitlePageHeaderProps = {
  title : string,
  styleCtn? : ViewStyle,
  styleTxt? : ViewStyle,
  styleOpt? : ViewStyle,
  OptionComponent? : React.FC,
  onOptionPress? : GestureResponderEvent, 
  goBackOption? : boolean
} & ViewProps;
