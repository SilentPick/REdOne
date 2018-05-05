import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { changeStreetAddress, changeDistrict, changeCity, changeId, sendAdditionalDetails } from './actions';
import { makeSelectStreetAddress, makeSelectDistrict, makeSelectCity, makeSelectId } from './selectors';
import reducer from './reducer';

import '../../styles/forms.css';
import '../../styles/layout.css';
import '../../styles/style.css';
import '../../styles/nav-links.css';
import '../../styles/type.css';
import '../../styles/normalize.css';
import '../../styles/buttons.css';
import '../../styles/tables.css';
import '../../styles/media-queries.css';

class EmailConfirmed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section id="page-small" className="u-cf">
        <div className="page-small-single-col white-bg shadow rounded-corners">
          <i className="fa fa-check register-checksign" aria-hidden="true"></i>
          <h1 className="dual-color subtitle-register-page bolder"><span>Email</span> confirmed</h1>
          <h3 className="vertical-padding bold">Please provide us with a few additional details.</h3>
          <form onSubmit={this.props.EmailConfirmedForm} name="register-final" className="register-final-form" >
            <div className="register-final-table">
              <div className="register-final-left-col">
                <input value={this.props.streetaddress} onChange={this.props.onChangeStreetAddress} className="underline-input type16" type="text" name="address" placeholder="Street address" />
                <input value={this.props.district} onChange={this.props.onChangeDistrict} className="underline-input type16" type="text" name="district" placeholder="District" />
                <input value={this.props.city} onChange={this.props.onChangeCity} className="underline-input type16" type="text" name="city" placeholder="City" />
              </div>
              <div className="register-final-right-col">
                <input value={this.props.id} onChange={this.props.onChangeId} className="underline-input type16" type="text" name="id" placeholder="ID" />
                <p className="id-definition-text">ID explained: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
              </div>
            </div>
            <h3 className="vertical-margin bold">Which categories are you interested in?</h3>
            <button className="blue-toggle type14 bold">Category</button>
            <button className="red-toggle type14 bold">Category</button>
            <button className="blue-toggle type14 bold">Category</button>
            <button className="blue-toggle type14 bold">Category</button>
            <button className="red-toggle type14 bold">Category</button>
            <button className="blue-toggle type14 bold">Category</button>
            <button className="red-toggle type14 bold">Category</button>
            <button className="blue-toggle type14 bold">Category</button>
            <br /><br />
            <input className="bold" type="submit" name="login" value="Finish" />
          </form>
        </div>
      </section>
    );
  }
}

EmailConfirmed.propTypes = {
  onChangeStreetAddress: PropTypes.func,
  onChangeDistrict: PropTypes.func,
  EmailConfirmedForm: PropTypes.func,
  onChangeCity: PropTypes.func,
  onChangeId: PropTypes.func,
  streetaddress: PropTypes.string,
  district: PropTypes.string,
  city: PropTypes.string,
  id: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    EmailConfirmedForm: (evt) => {
      evt.preventDefault();
      dispatch(sendAdditionalDetails());
    },
    onChangeStreetAddress: (evt) => dispatch(changeStreetAddress(evt.target.value)),
    onChangeDistrict: (evt) => dispatch(changeDistrict(evt.target.value)),
    onChangeCity: (evt) => dispatch(changeCity(evt.target.value)),
    onChangeId: (evt) => dispatch(changeId(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  streetaddress: makeSelectStreetAddress(),
  district: makeSelectDistrict(),
  city: makeSelectCity(),
  id: makeSelectId(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'emailconfirmed', reducer });
const withSaga = injectSaga({ key: 'emailconfirmed', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EmailConfirmed);
