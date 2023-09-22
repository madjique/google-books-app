export type AuthResponse = {
  status: number,
  connected :boolean,
  username :string,
  token :string,
  message :string 
}

export type AuthCredentials = {
  username: string,
  password: string
}
