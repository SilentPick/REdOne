import { createSelector } from 'reselect';

const selectEmailConfirmed = (state) => state.get('emailconfirmed');

export const makeSelectMemberships = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('memberships')
);

export const verifyEmail = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('verify')
);
