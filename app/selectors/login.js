import { createSelector } from 'reselect';

const selectUserNameAndPass = (state) => state.get('usernameandpass');

const makeSelectUserName = () => createSelector(
  selectUserNameAndPass,
  (userNameAndPassState) => userNameAndPassState.get('username')
);
const makeSelectPassword = () => createSelector(
  selectUserNameAndPass,
  (userNameAndPassState) => userNameAndPassState.get('password')
);
const userInfo = () => createSelector(
  selectUserNameAndPass,
  (userNameAndPassState) => userNameAndPassState.get('userinfo')
);

export const loginSelectors = {
  makeSelectUserName,
  makeSelectPassword,
  userInfo
};
