import { Text, TouchableOpacity } from 'react-native';
import { primaryButtonStyles as s } from './style'
import { PrimaryButtonProps } from './prop';
import { COLORS } from '../../styles/colors';
export const PrimaryButton = ( {title, styleCtn, styleTxt, bgColor = COLORS.primary, ...restTouchableOpacityProps} :PrimaryButtonProps) => {
  return (
    <TouchableOpacity
        style={{ ...s.buttonContainer, ...styleCtn, backgroundColor: bgColor }}
        {...restTouchableOpacityProps}
      >
      <Text style={{...s.buttonText, ...styleTxt}}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};

export default PrimaryButton ;