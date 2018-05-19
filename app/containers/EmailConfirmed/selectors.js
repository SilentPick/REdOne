import { createSelector } from 'reselect';

const selectEmailConfirmed = (state) => state.get('emailconfirmed');

export const verifyEmail = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('verify')
);
