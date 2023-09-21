import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";
import { FONT_FAMILY_NAME } from "../../constants";
import { FONTSIZE } from "../../styles/fontSizes";

export const componentStyle = StyleSheet.create({
  container: {
    borderRadius : 16,
    padding : 10,
    minHeight : 100,
    maxWidth : "100%",
    display: "flex",
    flexDirection : "row",
    backgroundColor : COLORS.white,
    shadowColor: "#3C3C3C",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 1,
  },
  imageContainer: {
    height : 80,
    width : 80,
    marginEnd : 10,
    borderRadius : 8
  },
  textContainer: { 
    height : 60,
    width : "70%",
  },
  title: {
    fontFamily: FONT_FAMILY_NAME,
    fontWeight: "700",
    fontSize : FONTSIZE.lg,
    color : COLORS.blackberry,
  },
  text: {
    fontFamily: FONT_FAMILY_NAME,
    fontSize : FONTSIZE.sm,
    fontWeight : "400",
    color : COLORS.secondary
  }
});

