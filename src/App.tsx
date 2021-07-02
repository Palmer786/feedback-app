import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactNotification from "react-notifications-component";
import { store } from "react-notifications-component";
import "animate.css";
import "react-notifications-component/dist/theme.css";

import * as routes from "./constants/routes";
import { theme } from "./constants/theme";
import LeftSection from "./components/LeftSection";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Homepage from "./components/Homepage";
import UserFeedback from "./components/UserFeedback";
import MyProfile from "./components/MyProfile";
import ProfileSettings from "./components/ProfileSettings";
import FeedbackAccepted from "./components/FeedbackAccepted";
import FeedbackDetails from "./components/FeedbackDetails";
import MenuButton from "./components/MenuButton";

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

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ReactNotification />
        <GlobalStyle />
        <MainContainer>
          <LeftSection />
          <MenuButton />
          <Switch>
            <Route exact path={routes.HOMEPAGE} component={Homepage} />
            <Route path={routes.SIGN_IN} component={SignIn} />
            <Route path={routes.SIGN_UP} component={SignUp} />
            <Route exact path={routes.MY_PROFILE} component={MyProfile} />
            <Route path={routes.PROFILE_SETTINGS} component={ProfileSettings} />
            <Route
              path={routes.FEEDBACK_ACCEPTED}
              component={FeedbackAccepted}
            />
            <Route
              path={`${routes.USER_FEEDBACK}:id`}
              component={UserFeedback}
            />
            <Route
              path={`${routes.FEEDBACK_DETAILS}:id`}
              component={FeedbackDetails}
            />
          </Switch>
        </MainContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
