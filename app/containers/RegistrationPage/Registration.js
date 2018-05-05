import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { changeUsername, changeEmail, sendregistration, changePassword, changeRepeatPassword } from './actions';
import { makeSelectUsername, makeSelectEmail, makeSelectPassword, makeSelectRepeatPassword } from './selectors';
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

class Registration extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section id="page-small" className="u-cf">
        <div className="page-small-left-col blue-bg shadow rounded-corners">
          <div className="logo-login"></div>
          <h3 className="register-white-text bold">Why register for RedOne account?</h3>
          <p className="small-text register-white-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p className="small-text register-white-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        </div>
        <div className="page-small-right-col white-bg shadow rounded-corners">
          <ul className="tab-nav two-col bold shadow">
            <li>Login</li>
            <li>Register</li>
          </ul>
          <h3 className="subtitle-register-page bold">Register for a RedOne account</h3>
          <form onSubmit={this.props.registrationForm} name="register" className="login-form">
            <input value={this.props.username} onChange={this.props.onChangeUsername} className="underline-input type16" type="text" name="fullname" placeholder="Full name" />
            <input value={this.props.email} onChange={this.props.onChangeEmail} className="underline-input type16" type="text" name="email" placeholder="E-mail" />
            <input value={this.props.password} onChange={this.props.onChangePassword} className="underline-input type16" type="password" name="password" placeholder="Password" />
            <input value={this.props.repeatpassword} onChange={this.props.onChangeRepeatPassword} className="underline-input type16" type="password" name="repeat" placeholder="Repeat password" />
            <div className="g-recaptcha" data-sitekey="6LcsxyoUAAAAAIm2wIi6dHAxr5ezFhf2YtbuvKZU"></div>
            <input className="bold" type="submit" name="Register" value="Register" />
            <div className="linethrough bold">or</div>
            <button className="login-facebook bold"><i className="fa fa-facebook type16 social-icon-login" aria-hidden="true"></i> Login with Facebook</button>
            <button className="login-twitter bold type16"><i className="fa fa-twitter type16 social-icon-login" aria-hidden="true"></i>Login with Twitter</button>
            <p className="site-terms type12">By registering you are agreeing with our website’s <a className="bold">Terms and Conditions.</a></p>
          </form>
        </div>
      </section>
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
      dispatch(sendregistration());
    },
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onChangeRepeatPassword: (evt) => dispatch(changeRepeatPassword(evt.target.value)),
  };
}

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  repeatpassword: makeSelectRepeatPassword(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registration', reducer });
const withSaga = injectSaga({ key: 'registration', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Registration);
