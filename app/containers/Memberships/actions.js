import { CHANGE_FORMINPUT, MEMBERSHIPS_LOADED, MEMBERSHIPS_LOAD, VERIFY_EMAIL, VERIFY_LOADED } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeFormInput(inputValue) {
  return {
    type: CHANGE_FORMINPUT,
    inputValue,
  };
}
export function membershipsLoaded(res) {
  console.log('action');
  return {
    type: MEMBERSHIPS_LOADED,
    res,
  };
}

export function membershipsLoad() {
  return {
    type: MEMBERSHIPS_LOAD,
  };
}

export function verifyEmailLoad(token) {
  return {
    type: VERIFY_EMAIL,
    token,
  };
}
