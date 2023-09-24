import { Text, TextInput, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { componentStyle as cs } from './style';
import { CustomTextInputProps } from './prop';

export const CustomTextInput = ({value, error, onBlur, onChangeText, placeholder="Enter", styleCtn, styleTxt, ...restTextInputProps}:CustomTextInputProps) => {
  return (
      <>
        <View 
          style={{
            ...cs.inputContainer,
            borderColor : ( error ? COLORS.red : COLORS.secondary),
            ...styleCtn
          }}>
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChangeText}
            value={value}
            autoCapitalize='none'
            placeholderTextColor={ error ? COLORS.red : COLORS.secondary}
            style={{
              ...cs.inputText,
              ...styleTxt
            }}
            {...restTextInputProps}
          />
        </View>
        <Text style={cs.errorText}>{!error?.message && error?.type }</Text>
      </>
  )
};

export default CustomTextInput ;