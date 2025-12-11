import { createContext } from "react";
import type { IDrawerOptions } from "./AppDrawerProvider";

export interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toggleDrawerOpen: () => void;
  setDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
  setDrawerOpen: (open: boolean) => void;
}

export const DrawerContext = createContext({} as IDrawerContextData);
