import { Text, TouchableOpacity } from 'react-native';
import { primaryButtonStyles as s } from './style'
import { PrimaryButtonProps } from './prop';
export const PrimaryButton = ( {title, styleCtn, styleTxt,...restTouchableOpacityProps} :PrimaryButtonProps) => {
  return (
    <TouchableOpacity
        style={{ ...s.buttonContainer, ...styleCtn }}
        {...restTouchableOpacityProps}
      >
      <Text style={{...s.buttonText, ...styleTxt}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

export default PrimaryButton ;