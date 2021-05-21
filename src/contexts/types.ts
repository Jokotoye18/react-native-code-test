export type AuthAction =
  | { type: "CANCEL_INITIALIZING" }
  | { type: "SET_USER"; payload: any }
  | { type: "USER_NULL" };

export type Dispatch = (action: AuthAction) => void;

export type AuthState = { initializing: boolean; user: any };

export type ThemeAction = { type: "CHANGE_THEME"; isLight: boolean };

export type ThemeDispatch = (action: ThemeAction) => void;

export type ThemeState = { isLight: true };
