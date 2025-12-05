import { useContext } from "react";
import { DrawerContext } from "./DrawerContext";

export const useAppDrawerContext = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error(
      "useAppThemeContext precisa estar dentro do <AppThemeProvider>"
    );
  }

  return context;
};
