import { Controller } from 'react-hook-form';
import { FormTextInputProps } from './prop';
import CustomTextInput from '../CustomTextInput';

export const FormTextInput = ({control, name, placeholder="Enter", styleCtn, styleTxt, ...restTextInputProps}:FormTextInputProps) => {
  return (
    
  <Controller
    control={control}
    rules={{ required: true }}
    render={({ field: { onChange, onBlur, value }, fieldState: { error }, formState: { errors } }) => (
      <CustomTextInput
        placeholder={placeholder}
        value={value}
        error= {error || errors?.root}
        onBlur={onBlur}
        onChangeText={onChange}
        {...restTextInputProps}
      />
    )}
    name={name}
  />
  )
};

export default FormTextInput ;