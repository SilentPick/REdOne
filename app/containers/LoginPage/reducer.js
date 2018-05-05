import { fromJS } from 'immutable';
import { CHANGE_USERNAME, CHANGE_PASSWORD } from './constants';

const initialState = fromJS({
  username: '',
  password: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.inputValue);
    case CHANGE_PASSWORD:
      return state.set('password', action.inputValue);
    default:
      return state;
  }
}

export default homeReducer;
