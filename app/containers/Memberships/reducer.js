import { fromJS } from 'immutable';
import { MEMBERSHIPS_LOADED, VERIFY_EMAIL } from './constants';

const initialState = fromJS({
  memberships: null,
  verify: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case MEMBERSHIPS_LOADED:
      return state.set('memberships', action.res);
    case VERIFY_EMAIL:
      return state.set('verify', action.res);
    default:
      return state;
  }
}

export default homeReducer;
