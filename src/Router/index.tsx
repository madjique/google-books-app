import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import BookList from '../screens/BooksList';
import BookOverview from '../screens/BookOverview';
import { RootStackNavigatorParamList } from '../common/types';
import Splash from '../screens/Splash';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const Router = () => {

  return (
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Splash" component={Splash} /> 
        <Stack.Screen name="BooksList" component={BookList} />
        <Stack.Screen name="BookOverview" component={BookOverview} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
}

export default Router