import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {toastr} from 'react-redux-toastr/lib';
import { makeSelectNewPassword, makeSelectConfirmPassword } from 'containers/NewPassword/selectors';
import { SEND_NEWPASS } from './constants';
import { history } from 'app';

export function* newPass({ token }) {
  const newPassword = yield select(makeSelectNewPassword());
  const confirmPassword = yield select(makeSelectConfirmPassword());
  const requestURL = 'http://i-valley.westus.cloudapp.azure.com/register/resetPassword';

  try {
    const res = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        password: newPassword,
        password2: confirmPassword,
        t: token,
      }),
    })
    if(res.hasError){
      toastr.warning('Warnings!', res.errors["0"].message)
    }else{
      toastr.success('Success!', res.message["0"])
      history.push("/Login")
    }

  } catch (err) {
    console.error(err)
  }
}

export default function* githubData() {
  yield takeLatest(SEND_NEWPASS, newPass);
}
