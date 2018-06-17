import { CHANGE_FORM_INPUT, MEMBERSHIPS_LOADED, MEMBERSHIPS_LOAD, SEND_TYPE_PAGES, USER_TYPE } from './constants';
import { fromJS } from 'immutable';

function changeFormInput(inputValue, inputName) {
  return {
    type: CHANGE_FORM_INPUT,
    inputValue,
    inputName
  };
}
function membershipsLoaded(res) {
  return {
    type: MEMBERSHIPS_LOADED,
    res,
  };
}

function membershipsLoad() {
  return {
    type: MEMBERSHIPS_LOAD,
  };
}

function changeUserType(inputValue) {
  return {
    type: USER_TYPE,
    inputValue,
  };
}

function sendTypePages() {
  return {
    type: SEND_TYPE_PAGES,
  };
}

export const membershipsActions = {
  changeFormInput,
  membershipsLoaded,
  membershipsLoad,
  changeUserType,
  sendTypePages
}

export const membershipsActionTypes = {
  CHANGE_FORM_INPUT,
  MEMBERSHIPS_LOADED,
  MEMBERSHIPS_LOAD,
  USER_TYPE,
  SEND_TYPE_PAGES
}

const initialState = fromJS({
  memberships: null,
  usertype: null,
  formInputs: {}
});

 export function membershipsReducer(state = initialState, action) {
  switch (action.type) {
    case MEMBERSHIPS_LOADED:
      return state.set('memberships', action.res);
      case USER_TYPE:
        return state.set('usertype', action.inputValue);
      case CHANGE_FORM_INPUT:
        console.log(action)
        return state.setIn(['formInputs', action.inputName], action.inputValue);
    default:
      return state;
  }
}
