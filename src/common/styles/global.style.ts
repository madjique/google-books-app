import { StyleSheet } from "react-native";
import { FONT_FAMILY_NAME } from "../constants";
import { FONTSIZE } from "./fontSizes";
import { COLORS } from "./colors";

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
   fontFamily : FONT_FAMILY_NAME,
   fontWeight : "700",
   fontSize : FONTSIZE.xxl,
   color : COLORS.blackberry,
  },
  subHeader : {
   fontFamily : FONT_FAMILY_NAME,
   fontWeight : "700",
   color : COLORS.secondary,
   fontSize : FONTSIZE.md,
   marginBottom : 14
  },
  errorText : {
    fontFamily : FONT_FAMILY_NAME,
    color : COLORS.red,
    fontSize : FONTSIZE.sm,
    width : "90%",
    paddingHorizontal : 16,
    marginTop : 3,
    minHeight : 18
  }
})