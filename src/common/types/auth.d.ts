export type AuthResponse = {
  status: number,
  connected :boolean,
  token :string | null,
  message :string 
}

export type AuthCredentials = {
  username: string,
  password: string
}
