import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {toastr} from 'react-redux-toastr/lib'
import { forgotPassSelectors } from '../selectors';
import { forgotPasswordActionTypes } from '../redux-main';

export function* forgot() {
  const username = yield select(forgotPassSelectors.makeSelectForgotUserName());
  const requestURL = 'http://i-valley.westus.cloudapp.azure.com/register/forgotPassword';

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
  yield takeLatest(forgotPasswordActionTypes.FORGOTPASS_SEND, forgot);
}
