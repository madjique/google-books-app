import { Button, Image, Linking, ScrollView, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-navigation"
import { BookOverviewScreenProp } from "../../common/types"
import { NOT_AVAILABLE_DATA_PLACEHOLDER, NO_BOOK_IMAGE_AVAILABLE_FALLBACK_URL } from "../../common/constants"

const BookOverview = ( {route, navigation} : BookOverviewScreenProp ) => {

  const {imageLinks, title, description, authors, industryIdentifiers, publisher, previewLink} = route.params.book.volumeInfo
  
  return (
    <SafeAreaView 
      style={{ flex: 1, alignItems: 'center'}}
      >
      <StatusBar
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={{width: "100%"}}>
        <Button
            title = "Go Back"
            onPress={()=> navigation.goBack()}
          />
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text 
            style={{margin: 30 , fontSize: 20, fontWeight: "600"}} 
            >
            Book Details
          </Text>
        </View>
        <View>
          <View style={{display: "flex", alignItems: "center"}}>
            <Image
              style = {{ height : 200, width: 150}}
              source= {{uri:imageLinks?.thumbnail || NO_BOOK_IMAGE_AVAILABLE_FALLBACK_URL}}
            />
          </View>
          <View style={{padding: 20}}> 
            <Text 
              style={{marginTop: 30 , fontSize: 20, fontWeight: "600"}} 
              >
                {title}
            </Text>
            <Text 
              style={{marginTop: 5 , fontSize: 14}} 
              >
                Author(s) : {authors?.join(', ') || NOT_AVAILABLE_DATA_PLACEHOLDER}
            </Text>
            <Text 
              style={{marginTop: 10 , fontSize: 14}} 
              >
                Publisher : {publisher || NOT_AVAILABLE_DATA_PLACEHOLDER }
            </Text>
            <Text 
              style={{marginTop: 10 , fontSize: 14}} 
              >
                ISBN : {industryIdentifiers[0].identifier} 
            </Text>

            <TouchableOpacity onPressOut={() => {Linking.openURL(previewLink || "")}}>
              <Text 
                style={{marginTop: 10 , fontSize: 14, color: "blue", textDecorationLine: "underline"}} 
                >
                    See in Google Books
              </Text>
            </TouchableOpacity>
            <Text 
              style={{marginTop: 10 , fontSize: 14}} 
              >
                Description : 
            </Text>
            <Text 
              style={{ fontSize: 14}} 
              >
                {description || NOT_AVAILABLE_DATA_PLACEHOLDER}
            </Text>
          </View>
        </View>
      </ScrollView> 
    </SafeAreaView>
  )
}

export default BookOverview