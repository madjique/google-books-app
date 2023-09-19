import { Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native';
import { primaryButtonStyles as s } from './style'
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

type PrimaryButtonProps = {
  title : string,
  styleCtn? : ViewStyle,
  styleTxt? : ViewStyle
} & TouchableOpacityProps;

export default PrimaryButton ;