import { fromJS } from 'immutable';
import { CHANGE_NEWPASSWORD, CHANGE_CONFIRMPASSWORD } from './constants';

const initialState = fromJS({
  newpassword: '',
  confirmpassword: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NEWPASSWORD:
      return state.set('newpassword', action.inputValue);
    case CHANGE_CONFIRMPASSWORD:
      return state.set('confirmpassword', action.inputValue);
    default:
      return state;
  }
}

export default homeReducer;
