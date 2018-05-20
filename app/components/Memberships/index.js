import React from 'react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import request from 'utils/request';
import { getToken } from 'utils/localStorage'

import '../../styles/style.css';
import '../../styles/normalize.css';

class Membership extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="membership-selection-container fl-left">
        <p className="service-name bolder type25">{this.props.membershipType}</p>
        <img className="bot-margin" src={`${this.props.membershiсpIconPath}/${this.props.membershipIcon}`} />
        <hr className="solid" />
        <ul className="service-checklist">
          <li className="service-available type14"><i className="fa fa-check-circle" aria-hidden="true"></i>{renderHTML(this.props.membershipDescription)}</li>
        </ul>
        <div className="service-buttons-container">
          <p className="service-prices type35 bolder">{`$${this.props.membershipCost}`}<span className="type20 bolder">.99</span></p>
          <div
            className="listing-btn type16 bold u-cf" onClick={() => {
              request('http://redvalley.westeurope.cloudapp.azure.com/paymember', {
                headers: {
                  Authorization: 'Bearer ' + getToken(),
                },
                method: 'post',
                body: JSON.stringify({
                  paymentMethod: 'paypal',
                  membershipType: this.props.membershipType,
                  membershipTypeId: this.props.id,
                  startDate: '2018-05-04',
              	  zoneCode: 'ABCD',
              	  userDiscountCode: 'XYZ',
                }),
              }).then((res) => {
                window.location = res.redirectURL;
              });
            }
          }
          >Upgrade</div>
        </div>
      </div>
    );
  }
}

export default Membership;
