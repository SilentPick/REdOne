import React from 'react';
import { Link } from 'react-router-dom';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { changeUserName, changePassword, sendUserNameAndPass } from './actions';
import { makeSelectUserName, makeSelectPassword } from './selectors';
import history from '../app';
import reducer from './reducer';
import messages from './messages';
import request from 'utils/request';

class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  handleSocialLogin = (params) => {
    request('http://redvalley.westeurope.cloudapp.azure.com/oauth', {
      method: 'post',
      body: JSON.stringify({
        provider: params._provider,
	      idToken: params._token.idToken
      }),
  })};

  render() {
    return (
      <section id="page-small" className="u-cf">
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
        <div className="page-small-right-col white-bg shadow rounded-corners">
          <ul className="tab-nav two-col bold shadow">
            <Link to="/Login">
              <li>
                <FormattedMessage {...messages.loginTab} />
              </li>
            </Link>
            <Link to="/Registration">
              <li>
                <FormattedMessage {...messages.registrationTab} />
              </li>
            </Link>
          </ul>
          <h3 className="subtitle-login-page bold">
            <FormattedMessage {...messages.loginText} />
          </h3>
          <form
            onSubmit={this.props.userNameAndPassForm}
            name="login"
            className="login-form"
          >
            <FormattedMessage {...messages.usernameInput}>
              {(message) => (<input
                value={this.props.username}
                onChange={this.props.onChangeUserName}
                className="underline-input type16"
                type="text"
                name="username"
                placeholder={message}
              />)}
            </FormattedMessage>
            <FormattedMessage {...messages.passwordInput}>
              {(message) => (<input
                value={this.props.password}
                onChange={this.props.onChangePassword}
                className="underline-input type16"
                type="password"
                name="password"
                placeholder={message}
              />)}
            </FormattedMessage>
            <div className="u-cf">
              <input
                type="checkbox"
                className="fl-left"
                id="remember"
                name="remember"
                value="remember"
              />
              <label
                htmlFor="remember"
                className="fl-left bold"
              >
                <FormattedMessage {...messages.rememberMe} />
              </label>
              <Link
                to="/ForgotPassword"
                className="fl-right bold"
                href="forgot-password.html"
              >
                <FormattedMessage {...messages.forgotPass} />
              </Link>
            </div>
            <FormattedMessage {...messages.loginButton}>
              {(message) => (<input
                className="bold"
                type="submit"
                name="login"
                value={message}
              />)}
            </FormattedMessage>
            <div className="linethrough bold">or</div>
          </form>
          <SocialLogin
            provider="facebook"
            appId="950746635099026"
            callback={this.handleSocialLogin}
          >
            <i
              className="fa fa-facebook type16 social-icon-login"
              aria-hidden="true"
            >
            </i>
            <button
              className="login-facebook bold"
            >
              <FormattedMessage {...messages.socialButtons} />
              Facebook
            </button>
          </SocialLogin>
          <SocialLogin
            provider="google"
            appId="353004601792-s5vg55h77u9i83eoa0ep79e9vh10tls5.apps.googleusercontent.com"
            callback={this.handleSocialLogin}
          >
            <i
              className="fa fa-twitter type16 social-icon-login"
              aria-hidden="true"
            >
            </i>
            <button
              className="login-twitter bold type16"
            >
              <FormattedMessage {...messages.socialButtons} />
              Google
            </button>
          </SocialLogin>
          <p className="site-terms type12">
            By accessing your account you are agreeing with our website’s
            <a className="bold">
              Terms and Conditions.
            </a>
          </p>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  userNameAndPassForm: PropTypes.func,
  onChangeUserName: PropTypes.func,
  onChangePassword: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    userNameAndPassForm: (evt) => {
      evt.preventDefault();
      dispatch(sendUserNameAndPass());
    },
    onChangeUserName: (evt) => dispatch(changeUserName(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUserName(),
  password: makeSelectPassword(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'usernameandpass', reducer });
const withSaga = injectSaga({ key: 'usernameandpass', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
