import { Controller } from 'react-hook-form';
import { Text, TextInput, View } from 'react-native';
import { COLORS } from '../../styles/colors';
import { componentStyle as cs } from './style';
import { TextInputCSProps } from './prop';

export const TextInputCS = ({control, name, placeholder="Enter", styleCtn, styleTxt, ...restTextInputProps}:TextInputCSProps) => {
  return (
    
  <Controller
    control={control}
    rules={{ required: true }}
    render={({ field: { onChange, onBlur, value }, fieldState: { error }, formState: { errors, isSubmitted } }) => (
      <>
        <View 
          style={{
            ...cs.inputContainer,
            borderColor : ( error || errors.root ? COLORS.red : COLORS.secondary),
            ...styleCtn
          }}>
          <TextInput
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize='none'
            placeholderTextColor={ error || errors.root ? COLORS.red : COLORS.secondary}
            style={{
              ...cs.inputText,
              ...styleTxt
            }}
            {...restTextInputProps}
          />
        </View>
        <Text style={cs.errorText}>{ error && error?.type }</Text>
      </>
    )}
    name={name}
  />
  )
};

export default TextInputCS ;