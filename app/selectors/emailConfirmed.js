import { createSelector } from 'reselect';

const selectEmailConfirmed = (state) => state.get('emailconfirmed');

const verifyEmail = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('verify')
);

export const emailConfirmedSelectors = {
  verifyEmail
};
