import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from 'utils/localStorage'

export const GuestRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      getToken()
      ? <Redirect to='/complete-profile' />
      : <Component {...props} />
  )} />
)
