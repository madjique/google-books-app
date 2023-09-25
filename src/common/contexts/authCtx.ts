import { Dispatch, SetStateAction, createContext } from "react";
import {User } from "../types";
import { clearUserSession, saveUserSession } from "../Storage";

export interface UserCtx {
  user? : User,
  dispatch? : Dispatch<SetStateAction<User>>,
  connected? : boolean
}


export const userCtxValue :UserCtx = {
  user : {}
}

export const AuthContext = createContext(userCtxValue)

