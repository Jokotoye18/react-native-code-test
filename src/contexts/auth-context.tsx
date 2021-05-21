import React, { useReducer } from "react";

import { AuthAction, Dispatch, AuthState } from "./types";
import { authReducer } from "../reducers/auth-reducer";

const initialState: AuthState = {
  initializing: true,
  user: null,
};

export const AuthContext =
  React.createContext<{ state: AuthState; dispatch: Dispatch }>(initialState);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
