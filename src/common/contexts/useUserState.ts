import { useEffect, useState } from "react"
import { AuthCredentials, AuthResponse, User } from "../types"
import { clearUserSession, getUserSession, saveUserSession } from "../Storage"
import { mockLogin } from "../network/api/login"

export const useUserState = ()=> {
  const [user, setUser] =useState<User>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [error, setError] = useState<string | null>()

  useEffect(() => {
    getUserSession().then( token => {
      if(token) {
        setUser({
          username : "",
          token
        })
        setIsSignedIn(true)
      }
    })
    .finally(()=> setIsLoading(false))
  }, [])
  

  const signIn = async ( authData : AuthCredentials) => {
    setError(null)
    setIsLoading(true) 
    return mockLogin(authData)
    .then( async (data :AuthResponse) => {
      setUser({
        username : "",
        token : data.token
      })
      await saveUserSession(data.token)
      setIsSignedIn(true)
    })
    .catch( (data :AuthResponse) => {setError(data.message)})
    .finally( () => setIsLoading(false))
  }

  const signOut = async () => {
    setIsLoading(true)
    clearUserSession()
    .then( () => setIsSignedIn(false))
    .finally( () => setIsLoading(false))
  }

  return {
    user,
    isLoading,
    isSignedIn,
    error,
    signIn,
    signOut
  }
}
