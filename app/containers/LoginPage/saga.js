import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUserName, makeSelectPassword } from 'containers/LoginPage/selectors';
import { SEND_USERNAMEANDPASS } from './constants';

export function* userNameAndPass() {
  const username = yield select(makeSelectUserName());
  const password = yield select(makeSelectPassword());
  const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/api/login';

  try {
    yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
    });
    alert('everything okay');
  } catch (err) {
    alert('something wrong');
  }
}

export default function* githubData() {
  yield takeLatest(SEND_USERNAMEANDPASS, userNameAndPass);
}
