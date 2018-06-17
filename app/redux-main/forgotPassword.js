import { FORGOTPASS_USERNAME, FORGOTPASS_SEND } from './constants';
import { fromJS } from 'immutable';

function changeForgotUserName(inputValue) {
  return {
    type: FORGOTPASS_USERNAME,
    inputValue,
  };
}

function sendForgotPass() {
  return {
    type: FORGOTPASS_SEND,
  };
}

export const forgotPasswordActions = {
  changeForgotUserName,
  sendForgotPass
}

export const forgotPasswordActionTypes = {
  FORGOTPASS_USERNAME,
  FORGOTPASS_SEND
}

const initialState = fromJS({
  forgotusername: '',
});

 export function forgotPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOTPASS_USERNAME:
      return state.set('forgotusername', action.inputValue);
    default:
      return state;
  }
}
