import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { makeSelectNewPassword, makeSelectConfirmPassword } from 'containers/NewPassword/selectors';
import { SEND_NEWPASS } from './constants';

export function* newPass() {
  const new_password = yield select(makeSelectNewPassword());
  const confirm_password = yield select(makeSelectConfirmPassword());
 const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/register/resetPassword';

  try {
    yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        password : new_password,
        password2 : confirm_password,
        t : 'd21df08ea96c40679b5bd91fb47699bb '
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
