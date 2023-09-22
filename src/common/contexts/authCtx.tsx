import { PropsWithChildren, createContext, useContext, useMemo } from "react";
import { useUserState } from "./useUserState";

export const AuthContext = createContext(useUserState())
export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }: PropsWithChildren<Record<string, unknown>>)=> {
  const state = useUserState();
  const value = useMemo(() => state, [state]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

