import { fromJS } from 'immutable';
import { CHANGE_STREETADDRESS, CHANGE_DISTRICT, CHANGE_CITY, CHANGE_ID } from './constants';

const initialState = fromJS({
  streetaddress: '',
  district: '',
  city: '',
  id: '',
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STREETADDRESS:
      return state.set('streetaddress', action.inputValue);
    case CHANGE_DISTRICT:
      return state.set('district', action.inputValue);
    case CHANGE_CITY:
      return state.set('city', action.inputValue);
    case CHANGE_ID:
      return state.set('id', action.inputValue);
    default:
      return state;
  }
}

export default homeReducer;
