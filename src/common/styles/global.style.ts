import { StyleSheet } from "react-native";
import { FONTSIZE } from "./fontSizes";
import { COLORS } from "./colors";
import { fontFamiliy } from "./fontFamily";

export const globalStyle = StyleSheet.create({
  screenContainer : { 
    flex: 1,
    alignItems: 'center'
  },
  bg : {
    flex: 1,
    width: "100%"
  },
  header : {
   fontFamily : fontFamiliy.bold,
   fontSize : FONTSIZE.xxl,
   color : COLORS.blackberry,
  },
  subHeader : {
   fontFamily : fontFamiliy.bold,
   color : COLORS.secondary,
   fontSize : FONTSIZE.md,
   marginBottom : 14
  },
  errorText : {
    fontFamily : fontFamiliy.regular,
    color : COLORS.red,
    fontSize : FONTSIZE.sm,
    width : "90%",
    paddingHorizontal : 16,
    marginTop : 3,
    minHeight : 18
  }
})