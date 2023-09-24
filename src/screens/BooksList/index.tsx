import { ActivityIndicator, FlatList, Text, View, Image, RefreshControl } from "react-native"
import { getBooksPerPage } from "../../common/network/api/books"
import { useCallback, useEffect, useState } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Book, BooksListScreenNavigationProp } from "../../common/types"
import BookCard from "../../common/components/BookCard"
import TitlePageHeader from "../../common/components/TitlePageHeader"
import { screenStyle as ss } from "./style"
import { globalStyle as gs } from "../../common/styles/global.style"
import { images } from "../../assets/images"
import { useNavigation } from "@react-navigation/native"
import CustomTextInput from "../../common/components/CustomTextInput"
import { useDebounce } from "../../common/hooks/useDebounce"


const BooksList = () => {
  const navigation = useNavigation<BooksListScreenNavigationProp>();
  const [refreshing, setRefreshing] = useState(false)
  const [search, setSearch] = useState<string>("")
  const [offset, setOffset] = useState<number>(0)
  const LIMIT_PER_SCREEN = 10
  const fetchBooks = ({ pageParam = 0 }):Promise<Book[]> => 
    getBooksPerPage(LIMIT_PER_SCREEN, pageParam, search)
    .then(
      res => { 
        setOffset(offset+1) ;
        return res.data.items
      })

  const { isFetching, error, fetchNextPage, hasNextPage, data : books, refetch, remove} = useInfiniteQuery({
    queryKey: ['Books'],
    queryFn: fetchBooks,
    getNextPageParam : useCallback(()=> LIMIT_PER_SCREEN*offset,[offset]),
  })


  const resetList = useCallback(async ()=> {
    remove();
    await refetch();
  } ,[])

  // Debounce on search
  useDebounce({
    values : [search],
    func : async () => { 
      !isFetching && await resetList()
    }
  })

  // Refresh
  useEffect(() => {
    refreshing && resetList().then(()=>setRefreshing(false))
  }, [refreshing])
  

  const onSearchTextChange = (nextValue : string) => {
    setOffset(0)
    setSearch(nextValue)
  }

  const onRefresh = async () => {
    setOffset(0)
    setRefreshing(true)
  }

  return (
    <View 
      style={gs.screenContainer}
      >
      <TitlePageHeader
        title="Trending books"
        styleCtn={ss.titlePageHeader}
        OptionComponent={()=><Image source={images.account}/>}
        onOptionPress={() => navigation.navigate("Settings")}
        goBackOption={false}
      />
      <FlatList
        data={books?.pages.flat()}
        style={ss.list}
        ListHeaderComponent={
            <CustomTextInput
              value={search}
              onChangeText={onSearchTextChange}
              placeholder="Search"  
            />
        }
        ListHeaderComponentStyle={ss.searchBox}
        renderItem={({item}) => item && <BookCard key={item?.etag || item.toString()} book={item} />}
        ItemSeparatorComponent={()=><View style={{height: 8}} />}
        keyExtractor={item => item?.etag}
        onEndReached={()=> !isFetching && hasNextPage && fetchNextPage()}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        refreshControl={<RefreshControl progressViewOffset={110} style={ss.refreshCtl} refreshing={refreshing} onRefresh={onRefresh} />}
        ListFooterComponent={
          <View style={ss.loadingContainer}>
            { isFetching && !refreshing && <ActivityIndicator/> }
            { !isFetching && !!error && <Text style={gs.errorText}>{error.toString()}</Text>}
          </View>
        }
      />
    </View>
  )
}

export default BooksList
