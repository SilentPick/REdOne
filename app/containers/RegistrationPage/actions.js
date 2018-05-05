import { CHANGE_USERNAME, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_REPEATPASSWORD, SEND_REGISTRATION } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(inputValue) {
  return {
    type: CHANGE_USERNAME,
    inputValue,
  };
}

export function changeEmail(inputValue) {
  return {
    type: CHANGE_EMAIL,
    inputValue,
  };
}

export function changePassword(inputValue) {
  return {
    type: CHANGE_PASSWORD,
    inputValue,
  };
}

export function changeRepeatPassword(inputValue) {
  return {
    type: CHANGE_REPEATPASSWORD,
    inputValue,
  };
}

export function sendregistration() {
  return {
    type: SEND_REGISTRATION,
  };
}
