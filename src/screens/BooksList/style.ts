import { StyleSheet } from "react-native";
import { COLORS } from "../../common/styles/colors";

export const screenStyle = StyleSheet.create({
  list : {
    width: " 100%",
    paddingHorizontal : 24,
    backgroundColor : COLORS.white
  },
  listHeader : {
    height : 110
  },
  loadingContainer : {
    width : "100%",
    height: 50,
    padding : 10
  },
  titlePageHeader : {
    position : "absolute"
  }
}) 