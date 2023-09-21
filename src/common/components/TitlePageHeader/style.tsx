import { StyleSheet } from "react-native";
import { FONT_FAMILY_NAME } from "../../constants";
import { FONTSIZE } from "../../styles/fontSizes";
import { COLORS } from "../../styles/colors";

export const componentStyle = StyleSheet.create({
  pageTitleContainer : {
    width : " 100%",
    height : 110,
    padding : 24,
    paddingTop : 56,
    zIndex : 50,
    flexDirection : "row"
  },
  pageTitle :{
   fontFamily : FONT_FAMILY_NAME,
   fontWeight : "700",
   fontSize : FONTSIZE.sxl,
   color : COLORS.blackberry,
  },
  blurView : {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  option : {
    marginLeft : "auto",
    justifyContent : "flex-start"
  },
  goBack : {
    height: 24,
    width : 24,
    marginEnd : 8,
    marginTop : "auto",
    marginBottom : "auto"
  }
})