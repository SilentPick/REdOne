import { CHANGE_USERNAME, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_REPEATPASSWORD, SEND_REGISTRATION } from './constants';
import { fromJS } from 'immutable';

function changeUsername(inputValue) {
  return {
    type: CHANGE_USERNAME,
    inputValue,
  };
}

function changeEmail(inputValue) {
  return {
    type: CHANGE_EMAIL,
    inputValue,
  };
}

function changePassword(inputValue) {
  return {
    type: CHANGE_PASSWORD,
    inputValue,
  };
}

function changeRepeatPassword(inputValue) {
  return {
    type: CHANGE_REPEATPASSWORD,
    inputValue,
  };
}

function sendregistration() {
  return {
    type: SEND_REGISTRATION,
  };
}

export const registrationActions = {
  changeUsername,
  changeEmail,
  changePassword,
  changeRepeatPassword,
  sendregistration
}

export const registrationActionTypes = {
  CHANGE_USERNAME,
  CHANGE_EMAIL,
  CHANGE_PASSWORD,
  CHANGE_REPEATPASSWORD,
  SEND_REGISTRATION
}

const initialState = fromJS({
  username: '',
  email: '',
  password: '',
  repeatpassword: '',
});

export function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.inputValue);
    case CHANGE_EMAIL:
      return state.set('email', action.inputValue);
    case CHANGE_PASSWORD:
      return state.set('password', action.inputValue);
    case CHANGE_REPEATPASSWORD:
      return state.set('repeatpassword', action.inputValue);
    default:
      return state;
  }
}
