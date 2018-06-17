import { call, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {toastr} from 'react-redux-toastr/lib'
import { registrationSelectors } from '../selectors';
import { registrationActionTypes } from '../redux-main';

export function* registration() {
  const username = yield select(registrationSelectors.makeSelectUsername());
  const email = yield select(registrationSelectors.makeSelectEmail());
  const password = yield select(registrationSelectors.makePassword());
  const repeatpassword = yield select(registrationSelectors.makeSelectRepeatPassword());
  const requestURL = 'http://i-valley.westus.cloudapp.azure.com/register';
  const response = window.grecaptcha.getResponse();

  if (response !== '') {
    try {
       const res = yield call(request, requestURL, {
        method: 'post',
        body: JSON.stringify({
          name: username,
          email,
          password,
          password2: repeatpassword,
        }),
      })
      if (res.hasError){
        toastr.error('Error!', res.errors["0"].message)
      }else{
        toastr.success('Success!', 'Please, check your E-mail to confirm!')
      }
    } catch (err) {
    //  yield put(repoLoadingError(err));
    }
  } else {
    toastr.warning('Warning!', 'Please, confirm reCaptcha')
  }
}

export default function* githubData() {
  yield takeLatest(registrationActionTypes.SEND_REGISTRATION, registration);
}
