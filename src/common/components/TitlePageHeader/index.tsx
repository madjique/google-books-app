import { Image, Platform, Text, TouchableWithoutFeedback, View } from 'react-native';
import { TitlePageHeaderProps } from './prop';
import React from 'react';
import { BlurView } from "@react-native-community/blur";
import { componentStyle as s } from './style';
import { images } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../../types';

export const TitlePageHeader = ( {title, styleCtn, styleTxt, styleOpt, OptionComponent, onOptionPress, goBackOption=false,...restViewProps} :TitlePageHeaderProps) => {
  const navigation = useNavigation<StackNavigation>()
  return (
    <View
        style={{ ...s.pageTitleContainer, ...styleCtn }}
        {...restViewProps}
      >
        {
          Platform.OS === 'ios' &&
          <BlurView
            style={s.blurView}
            blurType="regular"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
          /> 
        }
      {
        goBackOption && 
        <TouchableWithoutFeedback 
          onPress={()=> navigation.goBack()}>
          <Image 
            source={images.leftArrow}
            style={s.goBack}
          />
        </TouchableWithoutFeedback>
      }
      <Text style={{...s.pageTitle, ...styleTxt}}>
        {title}
      </Text>
      {
        OptionComponent && 
        <TouchableWithoutFeedback 
          onPress={onOptionPress}>
          <View 
            style={{...s.option , ...styleOpt}}>
            <OptionComponent />
          </View>
        </TouchableWithoutFeedback >
      }
    </View>
  )
};

export default TitlePageHeader ;