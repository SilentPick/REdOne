import { CHANGE_STREETADDRESS, CHANGE_DISTRICT, CHANGE_CITY, CHANGE_ID, SEND_ADDITIONALDETAILS } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeStreetAddress(inputValue) {
  return {
    type: CHANGE_STREETADDRESS,
    inputValue,
  };
}

export function changeDistrict(inputValue) {
  return {
    type: CHANGE_DISTRICT,
    inputValue,
  };
}

export function changeCity(inputValue) {
  return {
    type: CHANGE_CITY,
    inputValue,
  };
}

export function changeId(inputValue) {
  return {
    type: CHANGE_ID,
    inputValue,
  };
}

export function sendAdditionalDetails() {
  return {
    type: SEND_ADDITIONALDETAILS,
  };
}
