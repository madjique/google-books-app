export type Book = {
  id :string,
  volumeInfo : {
    title :string,
    authors : string[],
    publisher :string,
    publishedDate :Date,
    description :string,
    mainCategory : string,
    industryIdentifiers : {identifier :string}[],
    pageCount :number,
    imageLinks :{
      smallThumbnail :string,
      thumbnail :string,
      small :string,
      medium :string,
      large :string,
      extraLarge :string,
    }
    previewLink :string,
  }
}
