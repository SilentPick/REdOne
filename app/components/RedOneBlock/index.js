import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class RedOne extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="page-small-left-col blue-bg shadow rounded-corners">
        <div className="logo-login"></div>
        <h3 className="register-white-text bold">
          <FormattedMessage {...messages.leftBlockHeader} />
        </h3>
        <p className="small-text register-white-text">
          <FormattedMessage {...messages.leftMainText} />
        </p>
        <p className="small-text register-white-text">
          <FormattedMessage {...messages.leftFooter} />
        </p>
      </div>
    )
  }
}

export default RedOne;
