import { call, select, takeLatest, put } from 'redux-saga/effects';
import {toastr} from 'react-redux-toastr/lib'
import request from 'utils/request';
import { saveToken } from 'utils/localStorage'
import { getUserId } from 'utils/localStorage'
import { loginSelectors } from '../selectors';
import { loginActionTypes, loginActions} from '../redux-main';
import { history } from 'history';

export function* userNameAndPass() {
  const username = yield select(loginSelectors.makeSelectUserName());
  const password = yield select(loginSelectors.makeSelectPassword());
  const requestURL = 'http://i-valley.westus.cloudapp.azure.com/api/login';
console.log('login true')
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
      saveToken(res.access_token, res.id)
      const userInfo = 'http://i-valley.westus.cloudapp.azure.com/user/'+ res.id;
      const resp = yield call(request, userInfo, {
        method: 'get'
      })
      put(loginActions.userInfoLoaded(resp));
      history.push("/complete-profile")
    }
  } catch (res) {

  }
}

export default function* githubData() {
  yield takeLatest(loginActionTypes.SEND_USERNAMEANDPASS, userNameAndPass)
}
