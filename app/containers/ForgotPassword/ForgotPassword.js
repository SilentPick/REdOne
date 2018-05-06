import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { changeForgotUserName, sendForgotPass } from './actions';
import { makeSelectForgotUserName } from './selectors';
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

class ForgotPassword extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section id="page-smallest" className="u-cf">
       <div className="forgot-pass-container white-bg shadow rounded-corners">
           <div className="logo-on-white"></div>
           <p id="confirmation-text" className="body-text"><span>Forgot your password?<br />Enter your username or email address below.</span></p>
           <form onSubmit={this.props.SendForgotPassForm} name="forgot-pass" className="login-form">
                <input value={this.props.nameOrEmail} onChange={this.props.onChangeForgorUserName} className="underline-input type16" type="text" name="username" placeholder="Email address or username" />
                <br /><br />
                <input className="bold" type="submit" name="forgot-pass" value="Continue" />
                <div className="u-cf">
                    <a className="fl-left type14 bold" href="login.html">Back to login</a>
                    <a className="fl-right type14 bold" href="register.html">Register account</a>
                </div>
            </form>
       </div>
     </section>
    );
  }
}

ForgotPassword.propTypes = {
  onChangeForgorUserName: PropTypes.func,
  SendForgotPassForm: PropTypes.func,
  nameOrEmail: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    SendForgotPassForm: (evt) => {
      evt.preventDefault();
      dispatch(sendForgotPass());
    },
    onChangeForgorUserName: (evt) => dispatch(changeForgotUserName(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  nameOrEmail: makeSelectForgotUserName(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgot', reducer });
const withSaga = injectSaga({ key: 'forgot', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ForgotPassword);
