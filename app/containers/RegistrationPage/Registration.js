import React from 'react';
import Recaptcha from 'react-grecaptcha';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import registration from '../../sagas/registration';
import { registrationSelectors } from '../../selectors';
import { registrationActions, registrationReducer } from '../../redux-main';
import messages from './messages';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RedOne from '../../components/RedOneBlock';
import Social from '../../components/SocialLogin';

class Registration extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
            <h3 className="subtitle-register-page bold">
              <FormattedMessage {...messages.registrationText} />
            </h3>
            <form
              onSubmit={this.props.registrationForm}
              name="register"
              className="login-form"
            >
              <FormattedMessage {...messages.fullnameInput}>
                {(message) => (<input
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                  className="underline-input type16"
                  type="text"
                  name="fullname"
                  placeholder={message}
                />)}
              </FormattedMessage>
              <FormattedMessage {...messages.emailInput}>
                {(message) => (<input
                  value={this.props.email}
                  onChange={this.props.onChangeEmail}
                  className="underline-input type16"
                  type="text"
                  name="email"
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
              <FormattedMessage {...messages.repeatpasswordInput}>
                {(message) => (<input
                  value={this.props.repeatpassword}
                  onChange={this.props.onChangeRepeatPassword}
                  className="underline-input type16"
                  type="password"
                  name="repeat"
                  placeholder={message}
                />)}
              </FormattedMessage>
              <Recaptcha
                sitekey="6Leh1lkUAAAAAGOsMV_sEqf5RXc7B7rEa-Uha5cB"
              />
              <FormattedMessage {...messages.registerButton}>
                {(message) => (<input
                  className="bold"
                  type="submit"
                  name="Register"
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

Registration.propTypes = {
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onChangeRepeatPassword: PropTypes.func,
  registrationForm: PropTypes.func,
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  repeatpassword: PropTypes.string,
  onChangeUsername: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    registrationForm: (evt) => {
      evt.preventDefault();
      dispatch(registrationActions.sendregistration());
    },
    onChangeUsername: (evt) => dispatch(registrationActions.changeUsername(evt.target.value)),
    onChangeEmail: (evt) => dispatch(registrationActions.changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(registrationActions.changePassword(evt.target.value)),
    onChangeRepeatPassword: (evt) => dispatch(registrationActions.changeRepeatPassword(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  username: registrationSelectors.makeSelectUsername(),
  email: registrationSelectors.makeSelectEmail(),
  password: registrationSelectors.makePassword(),
  repeatpassword: registrationSelectors.makeSelectRepeatPassword(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registration', reducer: registrationReducer });
const withSaga = injectSaga({ key: 'registration', saga: registration });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Registration);
