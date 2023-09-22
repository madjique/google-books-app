import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from './types';

export const saveUserSession = async (user: User) => {
  await AsyncStorage.setItem('user-token', user?.token)
  await AsyncStorage.setItem('user-name', user?.username)
}

export const getUserSession = async ():Promise<User | null> => {
  var token = await AsyncStorage.getItem('user-token');
  var username = await AsyncStorage.getItem('user-name')
  if (token && username)
    return { token, username }
  return null
}

export const clearUserSession = async () => {
  await AsyncStorage.removeItem('user-token')
  await AsyncStorage.removeItem('user-name')
}
