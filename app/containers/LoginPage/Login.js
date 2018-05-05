import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { changeUserName, changePassword, sendUserNameAndPass } from './actions';
import { makeSelectUserName, makeSelectPassword } from './selectors';
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

class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
          <h3 className="subtitle-login-page bold">Login with your existing account</h3>
          <form onSubmit={this.props.userNameAndPassForm} name="login" className="login-form">
            <input value={this.props.username} onChange={this.props.onChangeUserName} className="underline-input type16" type="text" name="username" placeholder="Username" />
            <input value={this.props.password} onChange={this.props.onChangePassword} className="underline-input type16" type="password" name="password" placeholder="Password" />
            <div className="u-cf">
              <input type="checkbox" className="fl-left" id="remember" name="remember" value="remember" /><label htmlFor="remember" className="fl-left bold" >Remember me</label>
              <a className="fl-right bold" href="forgot-password.html">Forgot password</a>
            </div>
            <input className="bold" type="submit" name="login" value="Log in" />
            <div className="linethrough bold">or</div>
            <button className="login-facebook bold"><i className="fa fa-facebook type16 social-icon-login" aria-hidden="true"></i> Login with Facebook</button>
            <button className="login-twitter bold type16"><i className="fa fa-twitter type16 social-icon-login" aria-hidden="true"></i>Login with Twitter</button>
            <p className="site-terms type12">By accessing your account you are agreeing with our website’s <a className="bold">Terms and Conditions.</a></p>
          </form>
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
