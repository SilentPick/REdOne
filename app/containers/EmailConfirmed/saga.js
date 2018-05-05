// import { call, select, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
// import { makeSelectStreetAddress, makeSelectDistrict, makeSelectCity, makeSelectId } from 'containers/EmailConfirmed/selectors';
// import { SEND_ADDITIONALDETAILS } from './constants';

export function* emailconfirmed() {
  // const streetaddress = yield select(makeSelectStreetAddress());
  // const district = yield select(makeSelectDistrict());
  // const city = yield select(makeSelectCity());
  // const id = yield select(makeSelectId());
//  const requestURL = 'http://redvalley.westeurope.cloudapp.azure.com/register';

  try {
    // yield call(request, requestURL, {
    //   method: 'post',
    //   body: JSON.stringify({
    //     name: username,
    //     email,
    //     password,
    //     password2: repeatpassword,
    //   }),
    // });
    alert('everything okay');
  } catch (err) {
  //  yield put(repoLoadingError(err));
  }
}

// export default function* githubData() {
//   yield takeLatest(SEND_ADDITIONALDETAILS, emailconfirmed);
// }
