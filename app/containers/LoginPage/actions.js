import { CHANGE_USERNAME, CHANGE_PASSWORD, SEND_USERNAMEANDPASS } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUserName(inputValue) {
  return {
    type: CHANGE_USERNAME,
    inputValue,
  };
}

export function changePassword(inputValue) {
  return {
    type: CHANGE_PASSWORD,
    inputValue,
  };
}

export function sendUserNameAndPass() {
  return {
    type: SEND_USERNAMEANDPASS,
  };
}
