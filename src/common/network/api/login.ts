import { AuthCredentials, AuthResponse } from "../../types"

export function mockLogin(credentials: AuthCredentials):Promise<AuthResponse>{

  const resolveData = {
    status: 200,
    connected : true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
    message: "Connected successfully",
    username : "Cynthia"
  }

  const rejectData = {
    status: 401,
    connected : false,
    message: "Wrong username or password ! Please try again" 
  }

  return new Promise<AuthResponse>((resolve,reject) => {
    if(credentials.username === 'user' && credentials.password === 'user')
      setTimeout(()=>resolve(resolveData),200)
    else
      setTimeout(()=>reject(rejectData),200)
    })
}
