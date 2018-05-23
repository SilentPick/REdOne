import { call, select, takeLatest, put } from 'redux-saga/effects';
import request from 'utils/request';
import { getUserId } from 'utils/localStorage'
// import { makeSelectStreetAddress, makeSelectDistrict, makeSelectCity, makeSelectId } from 'containers/EmailConfirmed/selectors';
import { MEMBERSHIPS_LOAD, SEND_TYPE_PAGES } from './constants';
import { membershipsLoaded } from './actions';

export function* emailconfirmed() {
  const membershipURL = 'http://redvalley.westeurope.cloudapp.azure.com/membership';
  try {
    const res = yield call(request, membershipURL, {
      method: 'get',
    });
    yield put(membershipsLoaded(res));
  } catch (err) {
  }
}

export function* sendTypePage() {
  const userId = getUserId()
  const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/user/{userId}';
  try {
    yield call(request, requestURL, {
      method: 'post',
      body: {
        name: "ddd"
      }
      
    });
  } catch (err) {
  }
}

export default function* githubData() {
  yield takeLatest(MEMBERSHIPS_LOAD, emailconfirmed)
}
