import { Platform, StyleSheet } from "react-native";
import { FONT_FAMILY_NAME } from "../../constants";
import { FONTSIZE } from "../../styles/fontSizes";
import { COLORS } from "../../styles/colors";

const pageTitleContainerAndroid = {
  backgroundColor : "white"
}

export const componentStyle = StyleSheet.create({
  pageTitleContainer : {
    width : " 100%",
    height : 110,
    padding : 24,
    paddingTop : 56,
    zIndex : 20,
    flexDirection : "row",
    ...(Platform.OS === 'android') && pageTitleContainerAndroid
  },
  pageTitle :{
   fontFamily : FONT_FAMILY_NAME,
   fontWeight : "700",
   fontSize : FONTSIZE.sxl,
   color : COLORS.blackberry,
   margin : -1,
  },
  blurView : {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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