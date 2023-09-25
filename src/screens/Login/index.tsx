import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native"
import { AuthCredentials, AuthResponse, LoginScreenNavigationProp } from "../../common/types";
import { mockLogin } from "../../common/network/api/login";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { images } from "../../assets/images";
import { FONT_FAMILY_NAME } from "../../common/constants";
import { COLORS } from "../../common/styles/colors";
import { FONTSIZE } from "../../common/styles/fontSizes";
import { TextInputCS } from "../../common/components/TextInputCS";
import PrimaryButton from "../../common/components/PrimaryButton";
import { AuthContext } from "../../common/contexts/authCtx";
import { saveUserSession } from "../../common/Storage";
import { globalStyle as gs } from "../../common/styles/global.style";

const Login = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const {dispatch} = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const {
      control,
      handleSubmit,
      formState: { errors },
      setError
    } = useForm({
      defaultValues: {
        username: "",
        password: "",
      },
    })

    const onSubmit = (data :AuthCredentials) => {
      setLoading(true) // this can be moved to Redux 
      mockLogin(data)
      .then( (data :AuthResponse) => {
        saveUserSession(data.token)
        dispatch && dispatch({token : data.token})
        navigation.replace("BooksList")
      })
      .catch( data => {
        setError("root",{ type: 'custom', message: data.message })
      })
      .finally( () => setLoading(false) )
    }

    return (
    <ImageBackground 
      source={images.main_bg} 
      style={gs.bg} 
      resizeMode="cover"
    >
      <StatusBar />
      <View style={gs.screenContainer}>
        <Text style={{...gs.header,...localStyle.loginHeader}} >Tech books</Text>
        <Text style={gs.subHeader} >Welcome !</Text>
        <TextInputCS
          name="username"
          control={control}
          placeholder="Username"
        />
        <TextInputCS
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry={true}
        />
        <PrimaryButton
          title="Log in"
          onPress={handleSubmit(onSubmit)}
          styleCtn={localStyle.loginButton}
        />

        { loading && <ActivityIndicator/> }
        { !loading && !!errors.root && <Text style={gs.errorText}>{errors.root?.message}</Text>}
      </View>
    </ImageBackground>
  )
}

const localStyle = StyleSheet.create({
  loginButton : {
    marginTop : 10
  },
  loginHeader :{
   marginTop : 200
  }
})

export default Login