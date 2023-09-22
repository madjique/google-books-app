import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";
import { FONTSIZE } from "../../styles/fontSizes";
import { fontFamiliy } from "../../styles/fontFamily";

export const componentStyle = StyleSheet.create({
  container: {
    borderRadius : 16,
    padding : 10,
    marginHorizontal : 10,
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
    elevation: 3,
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
    fontFamily: fontFamiliy.bold,
    fontSize : FONTSIZE.lg,
    color : COLORS.blackberry,
  },
  text: {
    fontFamily: fontFamiliy.medium,
    fontSize : FONTSIZE.sm,
    color : COLORS.secondary
  }
});

