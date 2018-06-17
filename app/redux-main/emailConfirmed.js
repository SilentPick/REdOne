import { VERIFY_EMAIL } from './constants';
import { fromJS } from 'immutable';

function verifyEmailLoad(token) {
  return {
    type: VERIFY_EMAIL,
    token,
  };
}

export const emailconfirmedActions = {
  verifyEmailLoad
}

export const emailconfirmedActionTypes = {
  VERIFY_EMAIL
}

const initialState = fromJS({
  verify: '',
});

export function emailConfirmedReducer(state = initialState, action) {
  switch (action.type) {
    case VERIFY_EMAIL:
      return state.set('verify', action.res);
    default:
      return state;
  }
}
