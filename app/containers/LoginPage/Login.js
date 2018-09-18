import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import loginSaga from '../../sagas/login';
import { loginSelectors } from '../../selectors';
import { loginActions, loginReducer } from '../../redux-main';
import { history } from '../../history';
import messages from './messages';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RedOne from '../../components/RedOneBlock';
import Social from '../../components/SocialLogin';

class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.userInfo()
  }

  render() {
    return (
      <div>
        <Header></Header>
        <section id="page-small" className="u-cf">
          <RedOne></RedOne>
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
            <Social></Social>
            <p className="site-terms type12">
              <FormattedMessage {...messages.termsConditions} />
              <a className="bold">
                <FormattedMessage {...messages.termsButton} />
              </a>
            </p>
          </div>
        </section>
        <Footer></Footer>
      </div>
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
      dispatch(loginActions.sendUserNameAndPass());
    },
    userInfo: (evt) => dispatch(loginActions.userInfo()),
    onChangeUserName: (evt) => dispatch(loginActions.changeUserName(evt.target.value)),
    onChangePassword: (evt) => dispatch(loginActions.changePassword(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  userInfo:loginSelectors.userInfo(),
  username: loginSelectors.makeSelectUserName(),
  password: loginSelectors.makeSelectPassword(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'usernameandpass', reducer: loginReducer });
const withSaga = injectSaga({ key: 'usernameandpass', saga: loginSaga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
