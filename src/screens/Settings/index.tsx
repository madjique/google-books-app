import { ImageBackground, ScrollView, Text, View } from "react-native"
import { images } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../common/types";
import PrimaryButton from "../../common/components/PrimaryButton";
import TitlePageHeader from "../../common/components/TitlePageHeader";
import { globalStyle as gs } from "../../common/styles/global.style";
import { screenStyle as ss } from "./style";
import { COLORS } from "../../common/styles/colors";
import { useAuthContext } from "../../common/contexts/authCtx";

const Settings = () => {
  const navigation = useNavigation<StackNavigation>(); 
  const { signOut } = useAuthContext()  
    return (
    <ImageBackground 
      source={images.main_bg} 
      style={gs.bg} 
      resizeMode="cover"
    >
      <View style={gs.screenContainer}>
        <TitlePageHeader
          title="Settings"
          styleCtn={ss.titlePageHeader}
          goBackOption
          />
        <View style={ss.titleHeaderShadow} />
        <ScrollView>
          <Text style={gs.subHeader}> No other options are available yet </Text>
        </ScrollView>
        <PrimaryButton
          title="Disconnect" 
          styleCtn={ss.disconnectButton}
          bgColor={COLORS.red}
          onPress={()=> { 
            signOut()
            navigation.popToTop();
            navigation.replace("Login"); 
          }}
        />
      </View>
    </ImageBackground>
  )
}

export default Settings