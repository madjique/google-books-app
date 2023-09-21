import { ActivityIndicator, FlatList, Text, View, Image } from "react-native"
import { getBooksPerPage } from "../../common/network/api/books"
import { useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Book, BooksListScreenNavigationProp } from "../../common/types"
import BookCard from "../../common/components/BookCard"
import TitlePageHeader from "../../common/components/TitlePageHeader"
import { screenStyle as ss } from "./style"
import { globalStyle as gs } from "../../common/styles/global.style"
import { images } from "../../assets/images"
import { useNavigation } from "@react-navigation/native"


const BooksList = () => {
  const navigation = useNavigation<BooksListScreenNavigationProp>();
  const [offset, setOffset] = useState<number>(0)
  const LIMIT_PER_SCREEN = 10
  const fetchBooks = ({ pageParam = 0 }):Promise<Book[]> => 
    getBooksPerPage(LIMIT_PER_SCREEN, pageParam)
      .then(
        res => { 
          setOffset(offset+1) ;
          return res.data.items
        })

  const { isFetching, error, fetchNextPage, hasNextPage, data : books} = useInfiniteQuery({
    queryKey: ['Books'],
    queryFn: fetchBooks,
    getNextPageParam : ()=> LIMIT_PER_SCREEN*offset,
  })
  return (
    <View 
      style={gs.screenContainer}
      >
      <TitlePageHeader
        title="Book List"
        styleCtn={ss.titlePageHeader}
        OptionComponent={()=><Image source={images.account}/>}
        onOptionPress={() => navigation.navigate("Settings")}
        goBackOption={false}
        />
      <FlatList
        data={books?.pages.flat()}
        ListHeaderComponent={<></>}
        ListHeaderComponentStyle={ss.listHeader}
        style={ss.list}
        refreshing={true}
        renderItem={({item}) => item && <BookCard key={item?.id || item.toString()} book={item} />}
        ItemSeparatorComponent={()=><View style={{height: 8}} />}
        keyExtractor={item => item?.volumeInfo?.previewLink}
        onEndReached={()=> !isFetching && hasNextPage && fetchNextPage()}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <View style={ss.loadingContainer}>
            { isFetching && <ActivityIndicator/> }
            { !isFetching && !!error && <Text style={gs.errorText}>{error.toString()}</Text>}
          </View>
        }
      />
    </View>
  )
}

export default BooksList
