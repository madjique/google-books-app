import { StyleSheet } from "react-native";

export const componentStyle = StyleSheet.create({
  container: {
    borderRadius : 5,
    padding : 10,
    minWidth : "90%",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    display: "flex",
    flexDirection : "row",
    maxWidth : "100%"
  },
  imageContainer: {
    height : 80,
    minWidth : 80,
    marginEnd : 10,
    borderRadius : 50
  },
  textContainer: { 
    maxWidth: "70%",
  },
  title: {
    fontFamily: "Outfit",
    fontWeight: 'bold',
  },
  text: {
    fontFamily: "Outfit",
  }
});

