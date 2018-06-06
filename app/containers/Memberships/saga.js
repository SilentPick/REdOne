import { call, select, takeLatest, put } from 'redux-saga/effects';
import request from 'utils/request';
import { getUserId } from 'utils/localStorage'
import { MEMBERSHIPS_LOAD, SEND_TYPE_PAGES } from './constants';
import { formInputs, userType } from 'containers/Memberships/selectors';
import { membershipsLoaded } from './actions';

export function* emailconfirmed() {
  const membershipURL = 'http://i-valley.westus.cloudapp.azure.com/membership';
  try {
    const res = yield call(request, membershipURL, {
      method: 'get',
    });
    yield put(membershipsLoaded(res));
  } catch (err) {
  }
}

export function* sendTypePage() {
  const inputName = yield select(formInputs());
  const Type = yield select(userType());
  const userId = getUserId();

  const formData = new FormData();
  const businessData = new FormData();
  const table = document.querySelector('.tg').innerHTML;

  formData.append('bannerImage', inputName.bannerImage);
  formData.append('name', inputName.name);
  formData.append('picture', inputName.picture);
  formData.append('location', inputName.location);
  formData.append('birthday', inputName.birthday);
  formData.append('idNumber', inputName.idNumber);
  formData.append('userType', 'Regular User');

  businessData.append('contactName', inputName.contactName);
  businessData.append('contactNumber', inputName.contactNumber);
  businessData.append('businessLogo', inputName.businessLogo);
  businessData.append('serviceDescription', inputName.serviceDescription);
  businessData.append('location', inputName.location);
  businessData.append('bannerImage', inputName.bannerImage);
  businessData.append('userType', 'Business');
  businessData.append('openingTime', table);
  const requestURL = 'http://i-valley.westus.cloudapp.azure.com/user/'+userId;
  try {
    if(Type === 1) {
      yield call(request, requestURL, {
        method: 'post',
        body: formData
      })
    }else{
      yield call(request, requestURL, {
        method: 'post',
        body: businessData
      })
    }
  } catch (err) {
  }
}

export default function* githubData() {
  yield [
    takeLatest(MEMBERSHIPS_LOAD, emailconfirmed),
    takeLatest(SEND_TYPE_PAGES, sendTypePage)
  ]
}
