import { CHANGE_NEWPASSWORD, CHANGE_CONFIRMPASSWORD, SEND_NEWPASS } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeNewPassword(inputValue) {
  return {
    type: CHANGE_NEWPASSWORD,
    inputValue,
  };
}

export function changeConfirmPassword(inputValue) {
  return {
    type: CHANGE_CONFIRMPASSWORD,
    inputValue,
  };
}

export function sendNewPass(token) {
  return {
    type: SEND_NEWPASS,
    token,
  };
}
