/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReduxToastr from 'react-redux-toastr/lib'
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';


import RegistrationPage from 'containers/RegistrationPage/Registration';
import LoginPage from 'containers/LoginPage/Login';
import EmailConfirmed from 'containers/EmailConfirmed/EmailConfirmed';
import ForgotPassword from 'containers/ForgotPassword/ForgotPassword';
import NewPassword from 'containers/NewPassword/NewPassword';
import Memberships from 'containers/Memberships/Memberships';

import '../../styles/forms.css';
import '../../styles/layout.css';
import '../../styles/style.css';
import '../../styles/type.css';
import '../../styles/buttons.css';
import '../../styles/tables.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

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
          <Route path="/Memberships" component={Memberships} />
          <Route path="/" component={LoginPage} />
        </Switch>
          <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-left"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar/>
        {/* <Footer />*/}
      </AppWrapper>
    </MuiThemeProvider>
  );
}
