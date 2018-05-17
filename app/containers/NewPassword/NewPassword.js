import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { changeNewPassword, changeConfirmPassword, sendNewPass } from './actions';
import { makeSelectNewPassword, makeSelectConfirmPassword } from './selectors';
import reducer from './reducer';
import messages from './messages';

import '../../styles/forms.css';
import '../../styles/style.css';
import '../../styles/buttons.css';

class NewPassword extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section id="page-smallest" className="u-cf">
        <div className="forgot-pass-container white-bg shadow rounded-corners">
          <div className="logo-on-white"></div>
          <p id="confirmation-text" className="body-text">
            <span>
              <FormattedMessage {...messages.mainText} />
            </span>
          </p>
          <form onSubmit={(e) => this.props.SendNewPassForm(e, this.props.match.params.token)} name="reset-pass" className="login-form">
            <FormattedMessage {...messages.newpasswordInput}>
              {(message) => (<input
                value={this.props.newpassword}
                onChange={this.props.onChangeNewPassword}
                className="underline-input type16"
                type="password"
                name="new-pass"
                placeholder={message}
              />)}
            </FormattedMessage>
            <FormattedMessage {...messages.confirmpasswordInput}>
              {(message) => (<input
                value={this.props.confirmpassword}
                onChange={this.props.onChangeConfirmPassword}
                className="underline-input type16"
                type="password"
                name="confirm-pass"
                placeholder={message}
              />)}
            </FormattedMessage>
            <br /><br />
            <FormattedMessage {...messages.resetButton}>
              {(message) => (<input
                className="bold"
                type="submit"
                name="reset-pass"
                value={message}
              />)}
            </FormattedMessage>
          </form>
        </div>
      </section>
    );
  }
}

NewPassword.propTypes = {
  onChangeConfirmPassword: PropTypes.func,
  onChangeNewPassword: PropTypes.func,
  SendNewPassForm: PropTypes.func,
  newpassword: PropTypes.string,
  confirmpassword: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    SendNewPassForm: (evt, token) => {
      evt.preventDefault();
      dispatch(sendNewPass(token));
    },
    onChangeNewPassword: (evt) => dispatch(changeNewPassword(evt.target.value)),
    onChangeConfirmPassword: (evt) => dispatch(changeConfirmPassword(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  newpassword: makeSelectNewPassword(),
  confirmpassword: makeSelectConfirmPassword(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'newpass', reducer });
const withSaga = injectSaga({ key: 'newpass', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewPassword);
