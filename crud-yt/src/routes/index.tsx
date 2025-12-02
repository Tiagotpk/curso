import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home Teste</div>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
