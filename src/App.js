import "./App.css";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

function App() {
  const theme = {
    black: "#000000",
    white: "#ffffff",
    lightGreen: "#9ef687",
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
