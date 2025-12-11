import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts/drawer/useAppDrawerContext";
import { useEffect } from "react";
import { Dashboard } from "../pages";

export const AppRoutes = () => {
  const { setDrawerOptions } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: "home",
        label: "Página Inicial",
        path: "/",
      },
    ]);
  }, [setDrawerOptions]);

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
