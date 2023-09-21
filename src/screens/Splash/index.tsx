import { useNavigation } from "@react-navigation/native";
import { Image, ImageBackground, StyleSheet, View } from "react-native"
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