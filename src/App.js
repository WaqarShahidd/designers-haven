import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { StoreProvider } from "./context/StoreContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const theme = createTheme();

  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </StoreProvider>
  );
}

export default App;
