import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: blue[700], //"#1976d2",
      dark: blue[800], //"#115293",
      light: blue[500], //"#4791db",
      contrastText: "#ffffff",
    },
    secondary: {
      main: red[500], //"#f50057",
      dark: red[400], //"#ab003c",
      light: red[300], //"#ff4081",
      contrastText: "#ffffff",
    },
    background: {
      default: "#303134",
      paper: "#202124",
    },
  },
});
