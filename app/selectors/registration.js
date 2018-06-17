import { createSelector } from 'reselect';

const selectRegistration = (state) => state.get('registration');

const makeSelectUsername = () => createSelector(
  selectRegistration,
  (registrationState) => registrationState.get('username')
);
const makeSelectEmail = () => createSelector(
  selectRegistration,
  (registrationState) => registrationState.get('email')
);
const makePassword = () => createSelector(
  selectRegistration,
  (registrationState) => registrationState.get('password')
);
const makeSelectRepeatPassword = () => createSelector(
  selectRegistration,
  (registrationState) => registrationState.get('repeatpassword')
);

export const registrationSelectors = {
  makeSelectUsername,
  makeSelectEmail,
  makePassword,
  makeSelectRepeatPassword
};
