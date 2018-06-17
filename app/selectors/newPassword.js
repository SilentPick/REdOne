import { createSelector } from 'reselect';

const selectNewPass = (state) => state.get('newpass');

const makeSelectNewPassword = () => createSelector(
  selectNewPass,
  (newPassState) => newPassState.get('newpassword')
);
const makeSelectConfirmPassword = () => createSelector(
  selectNewPass,
  (newPassState) => newPassState.get('confirmpassword')
);

export const newPassSelectors = {
  makeSelectNewPassword,
  makeSelectConfirmPassword
};
