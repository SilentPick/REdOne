import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectForgotUserName } from './selectors';
import { FORGOTPASS_SEND } from './constants';

export function* forgot() {
  const username = yield select(makeSelectForgotUserName());
  const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/register/forgotPassword';

  try {
    yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        username,
      }),
    });
    alert('everything okay. Please, check your Email');
  } catch (err) {
    alert('Something wrong');
  }
}

export default function* githubData() {
  yield takeLatest(FORGOTPASS_SEND, forgot);
}
