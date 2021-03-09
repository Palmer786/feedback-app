import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import * as routes from "./constants/routes";
import LeftSection from "./components/LeftSection";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
    * {
      // 1 rem = 10px
      font-size: 62.5%;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
    }
    body {
      margin: 0;
      padding: 0;
    }
    html {
      scroll-behavior: smooth;
    }
`;

const theme = {
  color: {
    red: "#ec1940",
    lightRed: "#fa1743",
    gray: "#4e5357",
    lightGray: "#a7a9ab",
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <MainContainer>
          <LeftSection />
          <Switch>
            <Route path={routes.SIGN_IN} component={SignIn} />
            <Route path={routes.SIGN_UP} component={SignUp} />
          </Switch>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
