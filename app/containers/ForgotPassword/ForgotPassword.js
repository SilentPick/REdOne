import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { changeForgotUserName, sendForgotPass } from './actions';
import { makeSelectForgotUserName } from './selectors';
import reducer from './reducer';
import messages from './messages';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

class ForgotPassword extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Header></Header>
        <section id="page-smallest" className="u-cf">
          <div className="forgot-pass-container white-bg shadow rounded-corners">
            <div className="logo-on-white"></div>
            <p
              id="confirmation-text"
              className="body-text"
            >
              <span>
                <FormattedMessage {...messages.mainText} />
                <br />
                <FormattedMessage {...messages.mainText2} />
              </span>
            </p>
            <form
              onSubmit={this.props.SendForgotPassForm}
              name="forgot-pass"
              className="login-form"
            >
              <FormattedMessage {...messages.forgotPlaceholder}>
                { (message) => (<input
                  value={this.props.nameOrEmail}
                  onChange={this.props.onChangeForgorUserName}
                  className="underline-input type16"
                  type="text"
                  name="username"
                  placeholder={message}
                />)}
              </FormattedMessage>
              <br /><br />
              <FormattedMessage {...messages.continueButton}>
                {(message) => (<input
                  className="bold"
                  type="submit"
                  name="forgot-pass"
                  value={message}
                />)}
              </FormattedMessage>
              <div className="u-cf">
                <Link
                  to="/Login"
                  className="fl-left type14 bold"
                  href="login.html"
                >
                  <FormattedMessage {...messages.toLoginButton} />
                </Link>
                <Link
                  to="/Registration"
                  className="fl-right type14 bold"
                  href="register.html"
                >
                  <FormattedMessage {...messages.registerAccbutton} />
                </Link>
              </div>
            </form>
          </div>
        </section>
        <Footer></Footer>
      </div>
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
