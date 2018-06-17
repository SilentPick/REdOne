import { CHANGE_NEWPASSWORD, CHANGE_CONFIRMPASSWORD, SEND_NEWPASS, } from './constants';
import { fromJS } from 'immutable';

function changeNewPassword(inputValue) {
  return {
    type: CHANGE_NEWPASSWORD,
    inputValue,
  };
}

function changeConfirmPassword(inputValue) {
  return {
    type: CHANGE_CONFIRMPASSWORD,
    inputValue,
  };
}

function sendNewPass(token) {
  return {
    type: SEND_NEWPASS,
    token,
  };
}

export const newPasswordActions = {
  changeNewPassword,
  changeConfirmPassword,
  sendNewPass,
}

export const newPasswordActionTypes = {
  CHANGE_NEWPASSWORD,
  CHANGE_CONFIRMPASSWORD,
  SEND_NEWPASS,
}

const initialState = fromJS({
  newpassword: '',
  confirmpassword: '',
});

export function newPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NEWPASSWORD:
      return state.set('newpassword', action.inputValue);
    case CHANGE_CONFIRMPASSWORD:
      return state.set('confirmpassword', action.inputValue);
    default:
      return state;
  }
}
