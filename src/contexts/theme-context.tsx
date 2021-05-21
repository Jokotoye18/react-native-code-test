import React, { useReducer } from "react";

import { AuthAction, ThemeDispatch, ThemeState } from "./types";
import { authReducer } from "../reducers/auth-reducer";
import { themeReducer } from "../reducers/theme-reducer";

const initialState: ThemeState = {
  isLight: true,
};

export const ThemeContext =
  React.createContext<{ state: ThemeState; dispatch: ThemeDispatch }>(
    initialState
  );

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
