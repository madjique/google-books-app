import { StyleSheet } from "react-native";
import { FONT_FAMILY_NAME } from "../../constants";
import { FONTSIZE } from "../../styles/fontSizes";
import { COLORS } from "../../styles/colors";

export const componentStyle = StyleSheet.create({
  inputText: {
    fontFamily : FONT_FAMILY_NAME,
    fontSize: FONTSIZE.md,
    color : COLORS.secondary
  },
  errorText : {
    fontFamily : FONT_FAMILY_NAME,
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
