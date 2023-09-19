import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import BookList from '../screens/BooksList';
import BookOverview from '../screens/BookOverview';
import { RootStackNavigatorParamList } from '../common/types';

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const Router = () => {
return (
  <Stack.Navigator 
    initialRouteName="Login"
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BooksList" component={BookList} />
      <Stack.Screen name="BookOverview" component={BookOverview} />
  </Stack.Navigator>
  );
}

export default Router