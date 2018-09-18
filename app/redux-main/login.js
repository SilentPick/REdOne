import { CHANGE_USERNAME, CHANGE_PASSWORD, SEND_USERNAMEANDPASS, USER_INFO_LOADED, USER_INFO } from './constants';
import { fromJS } from 'immutable';

function changeUserName(inputValue) {
  return {
    type: CHANGE_USERNAME,
    inputValue,
  };
}

function userInfoLoaded(res) {
  return {
    type: USER_INFO_LOADED,
    res,
  };
}

function userInfo() {
  return {
    type: USER_INFO,
  };
}

function changePassword(inputValue) {
  return {
    type: CHANGE_PASSWORD,
    inputValue,
  };
}

function sendUserNameAndPass() {
  return {
    type: SEND_USERNAMEANDPASS,
  };
}

export const loginActions = {
  changeUserName,
  changePassword,
  sendUserNameAndPass,
  userInfoLoaded,
  userInfo
}

export const loginActionTypes = {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SEND_USERNAMEANDPASS,
  USER_INFO_LOADED,
  USER_INFO
}

const initialState = fromJS({
  username: '',
  password: '',
  userinfo: null,
});

 export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case USER_INFO_LOADED:
      return state.set('userinfo', action.res);
    case CHANGE_USERNAME:
      return state.set('username', action.inputValue);
    case CHANGE_PASSWORD:
      return state.set('password', action.inputValue);
    default:
      return state;
  }
}
