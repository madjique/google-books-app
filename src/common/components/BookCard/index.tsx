import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Book, BooksListScreenNavigationProp } from '../../types';
import { NO_BOOK_IMAGE_AVAILABLE_FALLBACK_URL } from '../../constants';

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

const s = StyleSheet.create({
  container: {
    borderRadius : 5,
    padding : 10,
    minWidth : "90%",
    borderWidth: 1,
    borderColor: "#d6d6d6",
    display: "flex",
    flexDirection : "row",
    maxWidth : "100%"
  },
  imageContainer: {
    height : 80,
    minWidth : 80,
    marginEnd : 10,
    borderRadius : 50
  },
  textContainer: { 
    maxWidth: "70%",
  },
  title: {
    fontFamily: "Outfit",
    fontWeight: 'bold',
  },
  text: {
    fontFamily: "Outfit",
  }
});


export default BookCard ;