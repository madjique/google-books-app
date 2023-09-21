import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import BookList from '../screens/BooksList';
import BookOverview from '../screens/BookOverview';
import { RootStackNavigatorParamList, User } from '../common/types';
import { useState } from 'react';
import { AuthContext, userCtxValue } from '../common/contexts/authCtx';
import Splash from '../screens/Splash';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const Router = () => {
  const [user, setUser] = useState<User>({})

  return (
    <AuthContext.Provider value={{dispatch:setUser}}>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen name="Splash" component={Splash} />
          {
            user.token &&
              <>
                <Stack.Screen name="BooksList" component={BookList} />
                <Stack.Screen name="BookOverview" component={BookOverview} />
                <Stack.Screen name="Settings" component={Settings} />
              </> 
          }
          <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </AuthContext.Provider>
    );
}

export default Router