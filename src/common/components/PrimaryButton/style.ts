import { StyleSheet } from "react-native";
import { FONT_FAMILY_NAME } from "../../constants";
import { FONTSIZE } from "../../styles/fontSizes";
import { COLORS } from "../../styles/colors";

export const primaryButtonStyles = StyleSheet.create({
  buttonContainer: {
    backgroundColor : COLORS.primary,
    borderRadius : 8,
    paddingVertical : 20,
    width : "90%",
    alignItems : "center",
    shadowColor: "#3C3C3C",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontFamily : FONT_FAMILY_NAME,
    fontSize : FONTSIZE.md,
    fontWeight : "bold",
    color : COLORS.white,
  }
});