import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LeftSection from "./components/LeftSection";

const GlobalStyle = createGlobalStyle`
    * {
      // 1 rem = 10px
      font-size: 62.5%;
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
    }
    html {
      scroll-behavior: smooth;
    }
`;

const theme = {};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LeftSection />
    </ThemeProvider>
  );
};

export default App;
