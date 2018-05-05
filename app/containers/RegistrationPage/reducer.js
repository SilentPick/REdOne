import { fromJS } from 'immutable';
import { CHANGE_USERNAME, CHANGE_EMAIL, CHANGE_PASSWORD, CHANGE_REPEATPASSWORD } from './constants';

const initialState = fromJS({
  username: '',
  email: '',
  password: '',
  repeatpassword: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.inputValue);
    case CHANGE_EMAIL:
      return state.set('email', action.inputValue);
    case CHANGE_PASSWORD:
      return state.set('password', action.inputValue);
    case CHANGE_REPEATPASSWORD:
      return state.set('repeatpassword', action.inputValue);
    default:
      return state;
  }
}

export default homeReducer;
