import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Book, BooksListScreenNavigationProp } from '../../types';
import { NO_BOOK_IMAGE_AVAILABLE_FALLBACK_URL } from '../../constants';
import { componentStyle as s } from './style';

const BookCard = ( props : {book: Book}) => {
  
  const {title, authors, publishedDate, pageCount, imageLinks} = props.book.volumeInfo
  const navigation = useNavigation<BooksListScreenNavigationProp>();
  return (
    <TouchableOpacity
        onPress={()=> navigation.navigate("BookOverview", props)}
        style={s.container}
      >
      <Image
        style={s.imageContainer}
        source={{ uri: imageLinks?.smallThumbnail || NO_BOOK_IMAGE_AVAILABLE_FALLBACK_URL }}
      />
      <View style={s.textContainer}>
        <Text style={s.title}>{ title }</Text>
        <Text style={s.text}>{ authors?.join(", ")}</Text>
        <Text style={s.text}>{ new Date(publishedDate).getFullYear() }</Text>
        <Text style={s.text}>{ pageCount } pages</Text>
      </View>
    </TouchableOpacity>
  )
};

export default BookCard ;