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
    height : 210,
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
  },
  searchBox : {
    width : "100%",
    alignItems : "center",
    backgroundColor : COLORS.white,
    marginTop : 110
  },
  refreshCtl : {
    position : "absolute",
    bottom : 110,
    //backgroundColor: COLORS.orange
  }
}) 