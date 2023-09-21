import { StyleSheet } from "react-native";
import { COLORS } from "../../common/styles/colors";
import { FONT_FAMILY_NAME } from "../../common/constants";
import { FONTSIZE } from "../../common/styles/fontSizes";

export const screenStyle = StyleSheet.create({
  titleHeader : {
    position : "absolute"
  },
  titleHeaderShadow : {
    height : 110
  },
  bookImage : {
    height : 250,
    width: 180,
    borderRadius : 10,
  },
  bookCard:{
    padding : 20,
    paddingTop : 0,
    width : "100%",
    backgroundColor : COLORS.white
  },
  bookTitle : {
    fontFamily : FONT_FAMILY_NAME,
    fontSize : FONTSIZE.sxl,
    fontWeight : "700",
    color : COLORS.blackberry,
    marginVertical : 10
  },
  bookSubFields : {
    fontFamily : FONT_FAMILY_NAME,
    fontSize : FONTSIZE.md,
    fontWeight : "400",
    color : COLORS.blackberry,
    paddingVertical : 5
  },
  bookButton : {
    marginVertical : 10,
    width : "100%" 
  },
  bookDescription : {
    color : COLORS.secondary
  }
})