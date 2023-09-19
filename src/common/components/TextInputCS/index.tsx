import { Control, Controller, FieldError, RegisterOptions } from 'react-hook-form';
import { StyleSheet, StyleSheetProperties, Text, TextInput, View, ViewStyle } from 'react-native';
import { COLORS } from '../../styles/colors';
import { FONTSIZE } from '../../styles/fontSizes';
import { TextInputProps } from 'react-native';
import { FONT_FAMILY_NAME } from '../../constants';

export const TextInputCS = ({control, name, placeholder="Enter", styleCtn, styleTxt, ...restTextInputProps}:TextInputCSProps) => {
  return (
    
  <Controller
    control={control}
    rules={{ required: true }}
    render={({ field: { onChange, onBlur, value }, fieldState: { error }, formState: { errors, isSubmitted } }) => (
      <>
        <View 
          style={{
            ...s.inputContainer,
            borderColor : ( error || errors.root ? COLORS.red : COLORS.secondary),
            ...styleCtn
          }}>
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
            {...restTextInputProps}
            placeholderTextColor={ error || errors.root ? COLORS.red : COLORS.secondary}
            style={{
              ...s.inputText,
              color : ( error || errors.root ? COLORS.red : COLORS.secondary),
              ...styleTxt
            }}
          />
        </View>
        <Text style={s.errorText}>{ error && error?.type }</Text>
      </>
    )}
    name={name}
  />
  )
};

type TextInputCSProps = {
  placeholder : string,
  control : Control<any>,
  name :string,
  styleCtn? :ViewStyle,
  styleTxt? :ViewStyle,
  rules? :RegisterOptions<any,string> // to be tested and fixed
} & TextInputProps;

const s = StyleSheet.create({
  inputText: {
    fontFamily : FONT_FAMILY_NAME,
    fontSize: FONTSIZE.md,
    color : COLORS.secondary
  },
  errorText : {
    fontFamily : FONT_FAMILY_NAME,
    color : COLORS.red,
    fontSize : FONTSIZE.sm,
    width : "90%",
    paddingHorizontal : 16,
    marginTop : 3,
    minHeight : 18,
    textTransform : "capitalize"
  },
  inputContainer : {
    borderColor : COLORS.grey,
    borderWidth : 1,
    borderRadius: 4,
    height : 46,
    width : "90%",
    paddingHorizontal : 16,
    paddingVertical : 13,
    backgroundColor : COLORS.white,
  }
});


export default TextInputCS ;