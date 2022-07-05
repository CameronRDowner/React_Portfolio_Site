import { Container } from "@mui/material";
import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Routes } from "./components/Routes";

function App() {
  return (
    <Container sx={{ maxWidth: "60rem" }}>
      <NavBar />
      <Routes />
    </Container>
  );
}

export default App;
