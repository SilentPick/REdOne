import { fromJS } from 'immutable';
import { FORGOTPASS_USERNAME } from './constants';

const initialState = fromJS({
  forgotusername: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case FORGOTPASS_USERNAME:
      return state.set('forgotusername', action.inputValue);
    default:
      return state;
  }
}

export default homeReducer;
