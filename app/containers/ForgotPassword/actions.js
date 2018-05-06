import { FORGOTPASS_USERNAME, FORGOTPASS_SEND } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeForgotUserName(inputValue) {
  return {
    type: FORGOTPASS_USERNAME,
    inputValue,
  };
}

export function sendForgotPass() {
  return {
    type: FORGOTPASS_SEND,
  };
}
