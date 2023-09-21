import { Linking, ScrollView, Text, View } from "react-native"
import { BookOverviewScreenProp } from "../../common/types"
import { NOT_AVAILABLE_DATA_PLACEHOLDER, NO_BOOK_IMAGE_AVAILABLE_FALLBACK } from "../../common/constants"
import TitlePageHeader from "../../common/components/TitlePageHeader"
import { screenStyle as ss } from "./style"
import { globalStyle as gs } from "../../common/styles/global.style"
import PrimaryButton from "../../common/components/PrimaryButton"
import { COLORS } from "../../common/styles/colors"
import FastImage from "react-native-fast-image"

const BookOverview = ( { route } : BookOverviewScreenProp ) => {

  const {imageLinks, title, description, authors, industryIdentifiers, publisher, previewLink, publishedDate} = route.params.book.volumeInfo
  
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
        <FastImage
          style = {ss.bookImage}
          source= {imageLinks?.thumbnail ? {uri:imageLinks?.thumbnail } : NO_BOOK_IMAGE_AVAILABLE_FALLBACK}
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
        <Text style={ss.bookSubFields}>
          Year : { new Date(publishedDate).getFullYear() }
        </Text>
        <Text style={ss.bookSubFields} >
            ISBN : {industryIdentifiers[0]?.identifier} 
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