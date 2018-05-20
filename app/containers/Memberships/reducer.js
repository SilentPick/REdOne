import { fromJS } from 'immutable';
import { MEMBERSHIPS_LOADED, USER_TYPE } from './constants';

const initialState = fromJS({
  memberships: null,
  usertype: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case MEMBERSHIPS_LOADED:
      return state.set('memberships', action.res);
    case USER_TYPE:
      return state.set('usertype', action.inputValue);
    default:
      return state;
  }
}

export default homeReducer;
