import { createContext } from "react";

export interface IThemeContextData {
  themeName: "light" | "dark";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContextData);
