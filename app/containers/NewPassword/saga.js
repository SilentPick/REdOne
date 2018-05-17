import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectNewPassword, makeSelectConfirmPassword } from 'containers/NewPassword/selectors';
import { SEND_NEWPASS } from './constants';

export function* newPass({ token }) {
  const newPassword = yield select(makeSelectNewPassword());
  const confirmPassword = yield select(makeSelectConfirmPassword());
  const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/register/resetPassword';

  try {
    yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        password: newPassword,
        password2: confirmPassword,
        t: token,
      }),
    });
    alert('everything okay. Your pass is update now');
  } catch (err) {
  //  yield put(repoLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(SEND_NEWPASS, newPass);
}
