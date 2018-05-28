import { call, select, takeLatest } from 'redux-saga/effects';
import {toastr} from 'react-redux-toastr/lib'
import request from 'utils/request';
import { saveToken } from 'utils/localStorage'
import { makeSelectUserName, makeSelectPassword } from 'containers/LoginPage/selectors';
import { SEND_USERNAMEANDPASS } from './constants';
import { history } from 'app';

export function* userNameAndPass() {
  const username = yield select(makeSelectUserName());
  const password = yield select(makeSelectPassword());
  const requestURL = 'http://i-valley.westus.cloudapp.azure.com/api/login';

  try {
    const res = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        username,
        password,
      }),
    })
    if (res.hasError){
      toastr.error('Error!', res.errors["0"].message)
    }else{
      saveToken(res.access_token),
      alert(res.access_token)
      history.push("/complete-profile")
    }
  } catch (res) {

  }
}

export default function* githubData() {
  yield takeLatest(SEND_USERNAMEANDPASS, userNameAndPass);
}
