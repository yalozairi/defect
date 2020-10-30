import "./App.css";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import Footer from "./components/Footer";

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
      <Footer />
    </ThemeProvider>
  );
}

export default App;
