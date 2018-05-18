import React from 'react';
import { Link } from 'react-router-dom';

class EmailConfirmed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <section id="page-small" className="u-cf">
        <form name="register-final" className="register-final-form">
          <div className="page-small-single-col white-bg shadow rounded-corners u-cf email-confirm-container">
            <i className="fa fa-check register-checksign" aria-hidden="true"></i>
            <h1 className="dual-color subtitle-register-page bolder"><span>Email</span> confirmed</h1>
            <p id="confirmation-text" className="body-text">Please, Log In to continue</p>
            <br />
            <Link to="/Login">
              <input className="bold" type="submit" name="login" value="Finish" />
            </Link>
          </div>
        </form>
      </section>
    );
  }
}
export default EmailConfirmed
