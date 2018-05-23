import { fromJS } from 'immutable';
import { MEMBERSHIPS_LOADED, USER_TYPE, CHANGE_FORM_INPUT } from './constants';

const initialState = fromJS({
  memberships: null,
  usertype: null,
  formInputs: {}
});

function homeReducer(state = initialState, action) {
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

export default homeReducer;
