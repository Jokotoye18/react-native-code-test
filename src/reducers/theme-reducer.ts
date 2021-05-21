import { ThemeAction, ThemeState } from "../contexts/types";

export const themeReducer = (state: ThemeState, action: ThemeAction) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      return {
        isLight: action.isLight,
      };
    }
    default:
      return state;
  }
};
