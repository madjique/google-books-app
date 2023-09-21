import { Platform, StyleSheet } from "react-native";
import { COLORS } from "../../common/styles/colors";

export const screenStyle = StyleSheet.create({
  list : {
    width: " 100%",
    paddingHorizontal : 14,
    backgroundColor : COLORS.white
  },
  listHeader : {
    marginTop : (Platform.OS === 'android' ? 10 : 0 ),
    height : 110,
    width : "100%",
    backgroundColor : COLORS.white
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