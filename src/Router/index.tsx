import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import BookList from '../screens/BooksList';
import BookOverview from '../screens/BookOverview';
import { RootStackNavigatorParamList, User } from '../common/types';
import { useEffect, useState } from 'react';
import { getUserSession } from '../common/Storage';
import { AuthContext, userCtxValue } from '../common/contexts/authCtx';
import Splash from '../screens/Splash';
import UserProfile from '../screens/UserProfile';

const Stack = createNativeStackNavigator<RootStackNavigatorParamList>();

const Router = () => {
  const [user, setUser] = useState<User>({})

  return (
    <AuthContext.Provider value={{...userCtxValue, dispatch:setUser}}>
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
                <Stack.Screen name="UserProfile" component={UserProfile} />
              </> 
            
          }
          <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </AuthContext.Provider>
    );
}

export default Router