import { ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native"
import { images } from "../../assets/images";
import { FONT_FAMILY_NAME } from "../../common/constants";
import { FONTSIZE } from "../../common/styles/fontSizes";
import { COLORS } from "../../common/styles/colors";

const UserProfile = () => {
    
    return (
    <ImageBackground 
      source={images.main_bg} 
      style={s.bg} 
      resizeMode="cover"
    >
      <StatusBar />
      <View style={s.screenContainer}>
        <Text style={s.header} >User Name</Text>
        
      </View>
    </ImageBackground>
  )
}


const s = StyleSheet.create({
  screenContainer : { 
    flex: 1,
    alignItems: 'center'
  },
  bg : {
    flex: 1,
    width: "100%"
  },
  header : {
   fontFamily : FONT_FAMILY_NAME,
   fontWeight : "700",
   fontSize : FONTSIZE.xxl,
   color : COLORS.blackberry,
   marginTop : 200
  },
  subHeader : {
   fontFamily : FONT_FAMILY_NAME,
   fontWeight : "700",
   color : COLORS.secondary,
   fontSize : FONTSIZE.md,
   marginBottom : 14
  },
})

export default UserProfile