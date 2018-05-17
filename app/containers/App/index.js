/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';


import RegistrationPage from 'containers/RegistrationPage/Registration';
import LoginPage from 'containers/LoginPage/Login';
import EmailConfirmed from 'containers/EmailConfirmed/EmailConfirmed';
import ForgotPassword from 'containers/ForgotPassword/ForgotPassword';
import NewPassword from 'containers/NewPassword/NewPassword';

const AppWrapper = styled.div`

`;

export default function App() {
  return (
    <MuiThemeProvider>
      <AppWrapper>
        {/* <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta name="description" content="A React.js Boilerplate application" />
        </Helmet>
        <Header /> */}
        <Switch>
          <Route exact path="/Registration" component={RegistrationPage} />
          <Route path="/register-complete/:token" component={EmailConfirmed} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/reset-password/:token" component={NewPassword} />
          <Route path="/Login" component={LoginPage} />
        </Switch>
        {/* <Footer />*/}
      </AppWrapper>
    </MuiThemeProvider>
  );
}
