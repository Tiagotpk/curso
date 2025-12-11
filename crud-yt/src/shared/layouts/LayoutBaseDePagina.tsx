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
  barraDeFerramentas,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  const theme = useTheme();

  const { toggleDrawerOpen } = useAppDrawerContext();

  return (
    <Box height={"100%"} display="flex" flexDirection="column" gap={1}>
      <Box
        padding={1}
        display="flex"
        alignItems="center"
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
        gap={1}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
          fontWeight="bold"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerramentas && <Box>{barraDeFerramentas}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
