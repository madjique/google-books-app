import { useEffect } from "react"
import { DEBOUNCE_TIMEOUT } from "./../constants"

export const useDebounce = ({values = [], func, debounceTimeout = DEBOUNCE_TIMEOUT} : UseDebounceParams<string | number | boolean>) => {
  useEffect(() => {
    const exec = setTimeout(func,debounceTimeout)
    return () => clearTimeout(exec)
  }, values)  
}

type UseDebounceParams<valueType> = {
  values? : valueType[],
  func : () => void,
  debounceTimeout? : number
}