import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Book } from './book';

export type StackNavigation = NavigationProp<RootStackNavigatorParamList>;

export type RootStackNavigatorParamList = {
  Splash: undefined,
  Login: undefined;
  BooksList: undefined;
  BookOverview: {
    book: Book
  },
  Settings: undefined
}

export type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Splash'
>;

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Login'
>;

export type BooksListScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'BooksList'
>;

export type BookOverviewScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'BookOverview'
>;

export type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackNavigatorParamList,
  'Settings'
>;

export interface BookOverviewScreenProp {
  navigation : BookOverviewScreenNavigationProp['navigation'],
  route : BookOverviewScreenNavigationProp['route']
}
