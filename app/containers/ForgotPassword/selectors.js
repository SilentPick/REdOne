import { createSelector } from 'reselect';

const ForgotUserName = (state) => state.get('forgot');

const makeSelectForgotUserName = () => createSelector(
  ForgotUserName,
  (forgotState) => forgotState.get('forgotusername')
);

export { makeSelectForgotUserName };
