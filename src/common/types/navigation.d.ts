import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Book } from './book';

export type RootStackNavigatorParamList = {
  Login: undefined;
  BooksList: undefined;
  BookOverview: {
    book: Book
  }
}

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

export interface BookOverviewScreenProp {
  navigation : BookOverviewScreenNavigationProp['navigation'],
  route : BookOverviewScreenNavigationProp['route']
}
