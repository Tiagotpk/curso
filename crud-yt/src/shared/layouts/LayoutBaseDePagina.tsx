import {
  Box,
  Icon,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
  type Theme,
} from "@mui/material";
import { useAppDrawerContext } from "../contexts/drawer/useAppDrawerContext";

interface ILayoutBaseDePagina {
  children?: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: React.ReactNode;
}
export const LayoutBaseDePagina: React.FC<ILayoutBaseDePagina> = ({
  children,
  titulo,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const theme = useTheme();
  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <Box height={"100%"} display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(5)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography variant="h5" fontWeight="bold">
          {titulo}
        </Typography>
      </Box>

      <Box>Barra de Ferramentas</Box>

      <Box>{children}</Box>
    </Box>
  );
};
