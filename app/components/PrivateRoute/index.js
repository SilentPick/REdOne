import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from 'utils/localStorage'

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      getToken()
      ? <Component {...props} />
      : <Redirect to='/Login' />
  )} />
)
