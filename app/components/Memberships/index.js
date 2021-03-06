import React from 'react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import request from 'utils/request';
import { getToken } from 'utils/localStorage';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

import '../../styles/style.css';
import '../../styles/normalize.css';

class Membership extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="membership-selection-container fl-left" style={{marginBottom: '20px'}}>
        <p className="service-name bolder type25">{this.props.membershipType}</p>
        <img className="bot-margin" src={`${this.props.membershipIconPath}/${this.props.membershipIcon}`} />
        <hr className="solid" />
        <ul className="service-checklist">
          <li className="service-available type14"><i className="fa fa-check-circle" aria-hidden="true"></i>{
            // renderHTML(this.props.membershipDescription)
            console.log('HTML', this.props.membershipDescription)
          }</li>
        </ul>
        <div className="service-buttons-container">
          <p className="service-prices type35 bolder">{`$${this.props.membershipCost}`}<span className="type20 bolder">.99</span></p>
          <button
            className="listing-btn type16 bold u-cf" onClick={() => {
              request('http://i-valley.westus.cloudapp.azure.com/paymember', {
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
          ><FormattedMessage {...messages.upgradeBtn} /></button>
        </div>
      </div>
    );
  }
}

export default Membership;
