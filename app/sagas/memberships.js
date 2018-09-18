import { call, select, takeLatest, put } from 'redux-saga/effects';
import request from 'utils/request';
import { getUserId } from 'utils/localStorage';
import { getToken } from 'utils/localStorage';
import {toastr} from 'react-redux-toastr/lib';
import { membershipsSelectors } from '../selectors';
import { membershipsActions, membershipsActionTypes } from '../redux-main';

export function* emailconfirmed() {
  const membershipURL = 'http://i-valley.westus.cloudapp.azure.com/membership';
  try {
    const res = yield call(request, membershipURL, {
      method: 'get',
    });
    yield put(membershipsActions.membershipsLoaded(res));
  } catch (err) {
  }
}


export function* sendTypePage() {
  const inputName = yield select(membershipsSelectors.formInputs());
  const Type = yield select(membershipsSelectors.userType());
  const userId = getUserId();

  const formData = new FormData();
  const businessData = new FormData();

  let result = null;
  let businessResult = null;

  if(Type === 1){
    let regularMass = ['name','picture', 'bannerImage', 'location','birthday','idNumber']
    result = regularMass.every(name => inputName[name])
  }else{
    let businessMass = ['contactName','contactNumber', 'businessLogo', 'serviceDescription','location','bannerImage']
     businessResult = businessMass.every(name => inputName[name])
  }

  if(!result && !businessResult){
    toastr.warning('Warnings!', 'Please fill in all fields')
  }else{
    if(Type === 2){
      const table = document.querySelector('.tg').innerHTML;
      businessData.append('contactName', inputName.contactName);
      businessData.append('contactNumber', inputName.contactNumber);
      businessData.append('businessLogo', inputName.businessLogo);
      businessData.append('serviceDescription', inputName.serviceDescription);
      businessData.append('location', inputName.location);
      businessData.append('bannerImage', inputName.bannerImage);
      businessData.append('userType', 'Business');
      businessData.append('openingTime', table);
    }else{
      formData.append('bannerImage', inputName.bannerImage),
      formData.append('name', inputName.name),
      formData.append('avatarUrl', inputName.picture),
      formData.append('location', inputName.location),
      formData.append('birthday', inputName.birthday),
      formData.append('idNumber', inputName.idNumber),
      formData.append('userType', 'user');
    }
    const requestURL = 'http://i-valley.westus.cloudapp.azure.com/profile/'+userId;
    try{
      yield call(request, requestURL, {
          headers: {
            Authorization: 'Bearer ' + getToken(),
          },
          method: 'post',
          body: Type === 1 ? formData : businessData
        })
    } catch (err) {
    }
  }
}

export default function* githubData() {
  yield [
    takeLatest(membershipsActionTypes.MEMBERSHIPS_LOAD, emailconfirmed),
    takeLatest(membershipsActionTypes.SEND_TYPE_PAGES, sendTypePage),
  ]
}
