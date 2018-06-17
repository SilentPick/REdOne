import { CHANGE_USERNAME, CHANGE_PASSWORD, SEND_USERNAMEANDPASS } from './constants';
import { fromJS } from 'immutable';

function changeUserName(inputValue) {
  return {
    type: CHANGE_USERNAME,
    inputValue,
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
  sendUserNameAndPass
}

export const loginActionTypes = {
  CHANGE_USERNAME,
  CHANGE_PASSWORD,
  SEND_USERNAMEANDPASS
}

const initialState = fromJS({
  username: '',
  password: '',
});

 export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.inputValue);
    case CHANGE_PASSWORD:
      return state.set('password', action.inputValue);
    default:
      return state;
  }
}
