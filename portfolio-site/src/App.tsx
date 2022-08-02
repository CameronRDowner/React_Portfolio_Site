import { Box, Container, Paper, ThemeProvider } from "@mui/material";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Routes } from "./components/Routes";
import { theme } from "./styles/theme";
import "@fontsource/montserrat";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          maxWidth: "60rem",
          borderRadius: "20px",
          margin: "0.5rem auto 0 auto",
        }}
        elevation={2}
      >
        <NavBar />
        <Routes />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
