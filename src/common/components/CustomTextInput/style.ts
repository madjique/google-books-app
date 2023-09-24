import { Platform, StyleSheet } from "react-native";
import { FONTSIZE } from "../../styles/fontSizes";
import { COLORS } from "../../styles/colors";
import { fontFamiliy } from "../../styles/fontFamily";

export const componentStyle = StyleSheet.create({
  inputText: {
    fontFamily : fontFamiliy.medium,
    color : COLORS.secondary,
    fontSize: FONTSIZE.md,
    padding: 0,
    marginBottom : (Platform.OS === 'android'? -5 : 0 )
  },
  errorText : {
    fontFamily : fontFamiliy.regular,
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
