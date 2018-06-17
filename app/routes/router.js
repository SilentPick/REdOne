import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import ReduxToastr from 'react-redux-toastr/lib'


import RegistrationPage from 'containers/RegistrationPage/Registration';
import LoginPage from 'containers/LoginPage/Login';
import EmailConfirmed from 'containers/EmailConfirmed/EmailConfirmed';
import ForgotPassword from 'containers/ForgotPassword/ForgotPassword';
import NewPassword from 'containers/NewPassword/NewPassword';
import Memberships from 'containers/Memberships/Memberships';
import {PrivateRoute} from '../components/PrivateRoute';
import {GuestRoute} from '../components/GuestRoute';

const AppWrapper = styled.div`

`;

export default function Router() {
  return (
    <MuiThemeProvider>
      <AppWrapper>
        <Switch>
          <GuestRoute exact path="/Registration" component={RegistrationPage} />
          <Route path="/register-complete/:token" component={EmailConfirmed} />
          <Route path="/ForgotPassword" component={ForgotPassword} />
          <Route path="/reset-password/:token" component={NewPassword} />
          <GuestRoute path="/Login" component={LoginPage} />
          <PrivateRoute path="/complete-profile" component={Memberships} />
          <Route path="/" component={LoginPage} />
        </Switch>
        <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
      </AppWrapper>
    </MuiThemeProvider>
  );
}
