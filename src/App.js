import AppRouter from "./routes/AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
