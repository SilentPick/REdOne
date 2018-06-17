import { call, select, takeLatest, put } from 'redux-saga/effects';
import request from 'utils/request';
import {toastr} from 'react-redux-toastr/lib'
import { emailconfirmedActionTypes } from '../redux-main';

export function* verify({ token }) {
  const tokenVerify = token;
  const membershipURL = `http://i-valley.westus.cloudapp.azure.com/register/verify?t=${tokenVerify}`;
  try {
    const res = yield call(request, membershipURL, {
      method: 'get',
    })
      toastr.success('Success!', 'Your registration is complete')
  } catch (err) {
  }
}

export default function* githubData() {
  yield takeLatest(emailconfirmedActionTypes.VERIFY_EMAIL, verify)
}
