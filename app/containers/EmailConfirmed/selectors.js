import { createSelector } from 'reselect';

const selectEmailConfirmed = (state) => state.get('emailconfirmed');

const makeSelectStreetAddress = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('streetaddress')
);
const makeSelectDistrict = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('district')
);
const makeSelectCity = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('city')
);
const makeSelectId = () => createSelector(
  selectEmailConfirmed,
  (emailconfirmedState) => emailconfirmedState.get('id')
);

export { makeSelectStreetAddress, selectEmailConfirmed, makeSelectDistrict, makeSelectCity, makeSelectId };
