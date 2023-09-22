import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, View } from "react-native"
import { SplashScreenNavigationProp } from "../../common/types";
import { images } from "../../assets/images";
import { useEffect } from "react";
import { useAuthContext } from "../../common/contexts/authCtx";
import { globalStyle as gs } from "../../common/styles/global.style";

const Splash = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();
    const { isLoading, isSignedIn } = useAuthContext();
    
    useEffect( () => {
      if (!isLoading)
        isSignedIn ? navigation.replace("BooksList") : navigation.replace("Login")
    }, [isLoading])

    return (
    <ImageBackground 
      source={images.main_bg} 
      style={gs.bg} 
      resizeMode="cover"
    >
      <View style={ls.centerScreenContainer}>
        <Image
          source={images.logo}
          style={ls.splash_logo}
        />
      </View>
    </ImageBackground>
  )
}


const ls = StyleSheet.create({
  centerScreenContainer :{
    ...gs.screenContainer,
    justifyContent :"center"
  },
  splash_logo : {
    width : 200,
    height : 200,
    margin : "auto"
  }
})

export default Splash