import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {toastr} from 'react-redux-toastr/lib'
import { makeSelectForgotUserName } from './selectors';
import { FORGOTPASS_SEND } from './constants';

export function* forgot() {
  const username = yield select(makeSelectForgotUserName());
  const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/register/forgotPassword';

  try {
    const res = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify({
        username,
      }),
    })
    if(res.hasError){
      toastr.warning('Warnings!', res.errors["0"].message)
    }else{
      toastr.success('Success!', 'Please, check your E-mail to confirm')
    }
  } catch (err) {

  }
}

export default function* githubData() {
  yield takeLatest(FORGOTPASS_SEND, forgot);
}
