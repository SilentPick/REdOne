import { createSelector } from 'reselect';

const selectMemberships = (state) => state.get('selectmemberships');

const makeSelectMemberships = () => createSelector(
  selectMemberships,
  (emailconfirmedState) => emailconfirmedState.get('memberships')
);

const userType = () => createSelector(
  selectMemberships,
  (emailconfirmedState) => emailconfirmedState.get('usertype')
);

const formInputs = () => createSelector(
  selectMemberships,
  (emailconfirmedState) => emailconfirmedState.get('formInputs').toJS()
);

export const membershipsSelectors = {
  makeSelectMemberships,
  userType,
  formInputs
};
