import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

export const useTheme = () => {
  const themeDispatch = useContext(ThemeContext)?.dispatch;
  const { isLight } = useContext(ThemeContext)?.state;

  return { isLight, themeDispatch };
};
