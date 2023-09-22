import { StyleSheet } from "react-native";
import { COLORS } from "../../common/styles/colors";
import { FONTSIZE } from "../../common/styles/fontSizes";
import { fontFamiliy } from "../../common/styles/fontFamily";

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
    fontFamily : fontFamiliy.bold,
    fontSize : FONTSIZE.sxl,
    color : COLORS.blackberry,
    marginVertical : 10
  },
  bookSubFields : {
    fontFamily : fontFamiliy.medium,
    fontSize : FONTSIZE.md,
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