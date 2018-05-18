import { call, select, takeLatest, put } from 'redux-saga/effects';
import request from 'utils/request';
// import { makeSelectStreetAddress, makeSelectDistrict, makeSelectCity, makeSelectId } from 'containers/EmailConfirmed/selectors';
import { MEMBERSHIPS_LOAD, VERIFY_EMAIL } from './constants';
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


  // const streetaddress = yield select(makeSelectStreetAddress());
  // const district = yield select(makeSelectDistrict());
  // const city = yield select(makeSelectCity());
  // console.log('kuhot2222')
  // const id = yield select(makeSelectId());
  // const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/register';


  // try {
  //   console.log('kuhot')
  //   yield call(request, requestURL, {
  //     method: 'post',
  //     body: JSON.stringify({
  //       name: username,
  //       email,
  //       password,
  //       password2: repeatpassword,
  //     }),
  //   });
  //   alert('everything okay');
  // } catch (err) {
  // //  yield put(repoLoadingError(err));
  // }

export default function* githubData() {
  yield [
    takeLatest(MEMBERSHIPS_LOAD, emailconfirmed),
    takeLatest(VERIFY_EMAIL, verify),
  ];
}
