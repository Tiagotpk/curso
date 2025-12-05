import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts/drawer/useAppDrawerContext";

export const AppRoutes = () => {
  const { toggleDrawerOpen } = useAppDrawerContext();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Button
            onClick={toggleDrawerOpen}
            variant="contained"
            color="primary"
          >
            Esconde Menu
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
