import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator, ImageBackground, StyleSheet, Text, View } from "react-native"
import { AuthCredentials, LoginScreenNavigationProp } from "../../common/types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { images } from "../../assets/images";
import { FormTextInput } from "../../common/components/FormTextInput";
import PrimaryButton from "../../common/components/PrimaryButton";
import { useAuthContext } from "../../common/contexts/AuthenticationContext";
import { globalStyle as gs } from "../../common/styles/global.style";

const Login = () => {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const { signIn, isLoading, error, isSignedIn } = useAuthContext();
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

    useEffect(() => {
      if(error) setError("root",{ type: 'custom', message: error })
      if(isSignedIn) navigation.replace("BooksList")
    }, [error, isSignedIn])
    
    const onSubmit =  (data :AuthCredentials) => signIn(data)

    return (
      <ImageBackground 
        source={images.main_bg} 
        style={gs.bg} 
        resizeMode="cover"
      >
        <View style={gs.screenContainer}>
          <Text style={{...gs.header,...ls.loginHeader}}>Story Books</Text>
          <Text style={gs.subHeader} >Browse Now !</Text>
          <FormTextInput
            name="username"
            control={control}
            placeholder="Username"
          />
          <FormTextInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry={true}
          />
          <PrimaryButton
            title="Log in"
            onPress={handleSubmit(onSubmit)}
            styleCtn={ls.loginButton}
          />

          { isLoading && <ActivityIndicator/> }
          { !isLoading && !!errors.root && <Text style={gs.errorText}>{errors.root?.message}</Text>}
        </View>
      </ImageBackground>
  )
}

const ls = StyleSheet.create({
  loginButton : {
    marginTop : 10
  },
  loginHeader :{
   marginTop : 200
  }
})

export default Login