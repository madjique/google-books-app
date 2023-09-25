import { Image, Linking, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { BookOverviewScreenProp } from "../../common/types"
import { NOT_AVAILABLE_DATA_PLACEHOLDER, NO_BOOK_IMAGE_AVAILABLE_FALLBACK_URL } from "../../common/constants"
import TitlePageHeader from "../../common/components/TitlePageHeader"
import { screenStyle as ss } from "./style"
import { globalStyle as gs } from "../../common/styles/global.style"
import PrimaryButton from "../../common/components/PrimaryButton"
import { COLORS } from "../../common/styles/colors"

const BookOverview = ( { route } : BookOverviewScreenProp ) => {

  const {imageLinks, title, description, authors, industryIdentifiers, publisher, previewLink} = route.params.book.volumeInfo
  
  return (
    <View 
      style={gs.screenContainer}
      >
      <TitlePageHeader 
        title="Book Details"
        goBackOption={true}
        styleCtn={ss.titleHeader}
      />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={ss.bookCard}
        >
        <View style={ss.titleHeaderShadow} />
        <Image
          style = {ss.bookImage}
          source= {{uri:imageLinks?.thumbnail || NO_BOOK_IMAGE_AVAILABLE_FALLBACK_URL}}
        /> 
        <Text style={ss.bookTitle} >
          {title}
        </Text>
        <Text style={ss.bookSubFields} >
          Author(s) : {authors?.join(', ') || NOT_AVAILABLE_DATA_PLACEHOLDER}
        </Text>
        <Text style={ss.bookSubFields} >
            Publisher : {publisher || NOT_AVAILABLE_DATA_PLACEHOLDER }
        </Text>
        <Text style={ss.bookSubFields} >
            ISBN : {industryIdentifiers[0].identifier} 
        </Text>
        <PrimaryButton 
          title="See in Google Books"
          onPressOut={() => {Linking.openURL(previewLink || "")}}
          bgColor={COLORS.orange}
          styleCtn={ss.bookButton}
        />
        <Text style={ss.bookSubFields} >
            Description : 
        </Text>
        <Text style={{...ss.bookSubFields , ...ss.bookDescription }} >
            {description || NOT_AVAILABLE_DATA_PLACEHOLDER}
        </Text>
      </ScrollView> 
    </View>
  )
}

export default BookOverview