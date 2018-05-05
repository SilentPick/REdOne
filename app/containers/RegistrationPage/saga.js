import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectUsername, makeSelectEmail, makeSelectPassword, makeSelectRepeatPassword } from 'containers/RegistrationPage/selectors';
import { SEND_REGISTRATION } from './constants';

export function* registration() {
  const username = yield select(makeSelectUsername());
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const repeatpassword = yield select(makeSelectRepeatPassword());
  const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/register';

  try {
    yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        name: username,
        email,
        password,
        password2: repeatpassword,
      }),
    });
    alert('everything okay');
  } catch (err) {
  //  yield put(repoLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(SEND_REGISTRATION, registration);
}
