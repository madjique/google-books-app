import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Book, BooksListScreenNavigationProp } from '../../types';
import { NO_BOOK_IMAGE_AVAILABLE_FALLBACK } from '../../constants';
import { componentStyle as s } from './style';

const BookCard = ( props : {book: Book}) => {
  
  const {title, authors, publishedDate, pageCount, imageLinks} = props.book.volumeInfo
  const navigation = useNavigation<BooksListScreenNavigationProp>();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("BookOverview", props)}>
      <View style={s.container}>
        <Image
          style={s.imageContainer}
          source= {imageLinks?.thumbnail ? {uri:imageLinks?.thumbnail } : NO_BOOK_IMAGE_AVAILABLE_FALLBACK}
        />
        <View style={s.textContainer}>
          <Text style={s.title} numberOfLines={1} ellipsizeMode='tail'>{ title }</Text>
          <Text style={s.text} numberOfLines={1} ellipsizeMode='tail'>{ authors?.join(", ")}</Text>
          <Text style={s.text}>{ new Date(publishedDate).getFullYear() }</Text>
          <Text style={s.text}>{ pageCount } pages</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};

export default BookCard ;