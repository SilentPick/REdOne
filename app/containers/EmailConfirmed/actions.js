import { VERIFY_EMAIL } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */

export function verifyEmailLoad(token) {
  return {
    type: VERIFY_EMAIL,
    token,
  };
}
