import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native"
import { AuthCredentials, LoginScreenNavigationProp } from "../../common/types";
import { mockLogin } from "../../common/network/api/login";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { images } from "../../assets/images";
import { FONT_FAMILY_NAME } from "../../common/constants";
import { COLORS } from "../../common/styles/colors";
import { FONTSIZE } from "../../common/styles/fontSizes";
import { TextInputCS } from "../../common/components/TextInputCS";
import PrimaryButton from "../../common/components/PrimaryButton";

const Login = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
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
      .then( () => navigation.replace('BooksList'))
      .catch( data => {
        setError("root",{ type: 'custom', message: data.message })
      })
      .finally( () => setLoading(false) )
    }

    return (
    <ImageBackground 
      source={images.main_bg} 
      style={s.bg} 
      resizeMode="cover"
    >
      <StatusBar />
      <View style={s.screenContainer}>
        <Text style={s.header} >Tech books</Text>
        <Text style={s.subHeader} >Welcome !</Text>
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
          styleCtn={s.loginButton}
        />

        { loading && <ActivityIndicator/> }
        { !loading && !!errors.root && <Text style={s.errorText}>{errors.root?.message}</Text>}
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
  errorText : {
    fontFamily : FONT_FAMILY_NAME,
    color : COLORS.red,
    fontSize : FONTSIZE.sm,
    width : "90%",
    paddingHorizontal : 16,
    marginTop : 3,
    minHeight : 18
  },
  loginButton : {
    marginTop : 10
  }
})

export default Login