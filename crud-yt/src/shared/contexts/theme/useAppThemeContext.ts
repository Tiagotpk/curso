import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const useAppThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useAppThemeContext precisa estar dentro do <AppThemeProvider>"
    );
  }

  return context;
};
