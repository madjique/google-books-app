import { FieldError } from "react-hook-form";
import { NativeSyntheticEvent, TextInputFocusEventData, TextInputProps } from "react-native";

export type CustomTextInputProps  = { 
  placeholder :string,
  value :string ,
  error? : FieldError | (Record<string, Partial<{ type: string | number; message: string; }>> & Partial<{ type: string | number; message: string; }>) ,
  onBlur? : (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
  onChangeText? : ((text: string) => void),
  styleCtn? :ViewStyle,
  styleTxt? :ViewStyle,
} & TextInputProps