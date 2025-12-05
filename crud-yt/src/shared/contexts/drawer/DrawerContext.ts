import { createContext } from "react";

export interface IDrawerContextData {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

export const DrawerContext = createContext({} as IDrawerContextData);
