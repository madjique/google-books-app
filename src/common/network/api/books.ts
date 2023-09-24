import React from "react"
import axios, { AxiosInstance } from "axios"
import { GOOGLE_BOOKS_V1_API_BASE_URL, GOOGLE_BOOKS_API_KEY } from '@env'
import { Book } from "../../types"

const GoogleBooksV1Client :AxiosInstance = axios.create({
  baseURL: `${GOOGLE_BOOKS_V1_API_BASE_URL}`,
  timeout: 1000
})

export function getBooksPerPage(perPage: number,index: number, search?: string) :Promise<GoogleBooksApiResponse> {
  var searchQuery = search?.replace(" ","+") || "roman+policier"
  const GET_BOOKS_QUERY = `?q=${searchQuery}&key=${GOOGLE_BOOKS_API_KEY}`
  return GoogleBooksV1Client.get(`${GET_BOOKS_QUERY}&orderBy=relevance&startIndex=${index}&maxResults=${perPage}`)
}

interface GoogleBooksApiResponse {
  data : {
    items : Book[],
    totalItems: number
  }  
}


