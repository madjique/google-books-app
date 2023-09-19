import { ActivityIndicator, FlatList, StatusBar, Text, View } from "react-native"
import { SafeAreaView } from "react-navigation"
import { getBooksPerPage } from "../../common/network/api/books"
import { useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Book } from "../../common/types"
import BookCard from "../../common/components/BookCard"


const BooksList = () => {
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
    <SafeAreaView 
      style={{ flex: 1 , alignItems: "center", minWidth: "100%"}}
      >
      <StatusBar/>
        <Text 
          style={{margin: 30 , fontSize: 20, fontWeight: "600"}} 
          >All Books</Text>
          <FlatList
            data={books?.pages.flat()}
            refreshing={true}
            renderItem={({item}) => item && <BookCard key={item?.id || item.toString()} book={item} />}
            ItemSeparatorComponent={()=><View style={{height: 10}} />}
            keyExtractor={item => item?.volumeInfo?.previewLink}
            onEndReached={()=> !isFetching && hasNextPage && fetchNextPage()}
          />
          <View style={{height: 30 , marginBottom : 20}}>
            { isFetching && <ActivityIndicator/> }
            { !isFetching && !!error && <Text style={{color: "red"}}>{error.toString()}</Text>}
          </View>
    </SafeAreaView>
  )
}

export default BooksList
