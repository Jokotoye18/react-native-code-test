import { AuthAction, AuthState } from "../contexts/types";

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "CANCEL_INITIALIZING":
      return {
        ...state,
        initializing: false,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        initializing: false,
      };
    case "USER_NULL":
      return {
        ...state,
        initializing: false,
        user: null,
      };
    default:
      return state;
  }
};
