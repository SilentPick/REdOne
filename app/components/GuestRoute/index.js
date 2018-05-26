import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const GuestRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      localStorage.access_token
      ? <Redirect to='/complete-profile' />
      : <Component {...props} />
  )} />
)
