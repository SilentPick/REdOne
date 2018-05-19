import { call, select, takeLatest, put } from 'redux-saga/effects';
import request from 'utils/request';
// import { makeSelectStreetAddress, makeSelectDistrict, makeSelectCity, makeSelectId } from 'containers/EmailConfirmed/selectors';
import { VERIFY_EMAIL } from './constants';
import { membershipsLoaded } from './actions';

export function* verify({ token }) {
  const tokenVerify = token;
  const membershipURL = `http://redvalley.westeurope.cloudapp.azure.com/register/verify?t=${tokenVerify}`;
  try {
    const res = yield call(request, membershipURL, {
      method: 'get',
    });
  } catch (err) {
  }
}

export default function* githubData() {
  yield takeLatest(VERIFY_EMAIL, verify)
}
