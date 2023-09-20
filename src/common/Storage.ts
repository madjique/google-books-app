import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserSession = (token :string) => AsyncStorage.setItem('user-token', token);

export const getUserSession = ():Promise<string | null> => AsyncStorage.getItem('user-token');

export const clearUserSession = () => AsyncStorage.removeItem('user-token')
