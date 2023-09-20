import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, StatusBar, StyleSheet, View } from "react-native"
import { SplashScreenNavigationProp } from "../../common/types";

import { images } from "../../assets/images";
import { useContext, useEffect } from "react";
import { getUserSession } from "../../common/Storage";
import { AuthContext } from "../../common/contexts/authCtx";
import { globalStyle as gs } from "../../common/styles/global.style";

const Splash = () => {
    const navigation = useNavigation<SplashScreenNavigationProp>();
    const { dispatch } = useContext(AuthContext);
    useEffect( () => {
      getUserSession()
      .then(token => {
        if(token) {
          dispatch && dispatch({token})
          navigation.replace("BooksList")
        }
        else
          navigation.replace("Login")
      })
    }, [])
    return (
    <ImageBackground 
      source={images.main_bg} 
      style={gs.bg} 
      resizeMode="cover"
    >
      <StatusBar />
      <View style={gs.screenContainer}>
        <Image
          source={images.logo}
          style={localStyle.splash_logo}
        />
      </View>
    </ImageBackground>
  )
}


const localStyle = StyleSheet.create({
  splash_logo : {
    width : 200,
    height : 200,
    margin : "auto"
  }
})

export default Splash