import React from 'react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import request from 'utils/request';

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
                  Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJwcmluY2lwYWwiOiJINHNJQUFBQUFBQUFBSlZTVFc4VE1SQ2RUWVBhaWtNcEVrZ2M2S25jcW8xYXhDa1gwaWh3V1pxcVNhUXFsWWljM2NuaXJ0YzJ0cmRKTGlnM2praXRLaUg2RlwvcFBPUEVEK0FrOWMrMDRcL2RqQXBjSW5lXC96ODNwczN2cnlDUjliQTY5UXdMbXlvUlpGeUdWcHR1RXd0eG9YaGJob1dGazJDYm81NFB3ZjJxQUkzSzZoQUVFR0ZKdzZlUnNmc2hOVUVrMm10UFR6RzJOVW5CbmFVU1c4WlI0YmxPRlltQysrNVkyWHdMNEdTT3ZoUmdlVStyTE00Vm9WMGUwcTJKcG9iVFByd3BLeEZLczU4NlZsTU55Z2RaOEl1UXBkUnNxSEFKSUxIckhDZkZLbHl0QTdXYnN3V2pvdGFCMTA5Z2hYTnJDVjNcLzNUU2NkNjZ2XC9jMkpYWHdHYjVBZGFJRFdwVGRLdzhOUFVcL1lWRUpRMTF4SnU5bVR1VXI0aUh0eDRwKzlQUDMxN1dMV3F3QlFKbHNQdnluckwzWmg5dlBqbjQxNTBFSHM0UG1DOVJKV24yaHlzMTR5ZHcxNjVkXC9mOThcL09yNzRlTFpHeVI3ejdcLzNsc05tNlRtelpWcnBsaFRpM01pR2pIVmI4bjh0Mkh5ZSttTUEwN1BOY0M2VWRKaDhtOVJFbE03VmFORW5kNU8xZzlhRWV0UWJmMVlkK2YxZ2FkcU5WdkRONFdtUWtsT2dwR05cL1lRRDlzNzNUZDhmRERNc3UzbWRqNUtyd0Zyd29xajVRSUFBQT09Iiwic3ViIjoiX1NMRVpBX0B1a3IubmV0Iiwicm9sZXMiOlsiUk9MRV9URU1QIl0sImV4cCI6MTUyNjQ5MTc1MSwiaWF0IjoxNTI2NDg4MTUxfQ.peNrRaFotI-5A3QJsYNM7CE8x-E-QFMv6XXWYJwN49M',
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
