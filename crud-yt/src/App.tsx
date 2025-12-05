import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppDrawerProvider } from "./shared/contexts/drawer/AppDrawerProvider";
import { AppThemeProvider } from "./shared/contexts/theme/AppThemeProvider";

const App = () => {
  return (
    <AppThemeProvider>
      <AppDrawerProvider>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </AppDrawerProvider>
    </AppThemeProvider>
  );
};

export default App;
