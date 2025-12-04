import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/AppThemeProvider";

const App = () => {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
};

export default App;
