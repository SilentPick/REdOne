import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { membershipsLoad, membershipsLoaded, changeFormInput, verifyEmailLoad } from './actions';
import { verifyEmail } from './selectors';
import reducer from './reducer';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

class EmailConfirmed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.verifyEmailLoad(this.props.match.params.token);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <section id="page-small" className="u-cf">
          <form name="register-final" className="register-final-form">
            <div className="page-small-single-col white-bg shadow rounded-corners u-cf email-confirm-container">
              <i className="fa fa-check register-checksign" aria-hidden="true"></i>
              <h1 className="dual-color subtitle-register-page bolder"><span><FormattedMessage {...messages.emailConfirmed} /></span><FormattedMessage {...messages.emailConfirmed2} /></h1>
              <p id="confirmation-text" className="body-text"><FormattedMessage {...messages.mainText} /></p>
              <br />
              <Link to="/Login">
                <FormattedMessage {...messages.finishButton}>
                  {(message) => (<input
                    className="bold"
                    type="submit"
                    name="forgot-pass"
                    value={message}
                  />)}
                </FormattedMessage>
              </Link>
            </div>
          </form>
        </section>
        <Footer></Footer>
      </div>
    );
  }
}

EmailConfirmed.propTypes = {
  emailVerify: PropTypes.string,
};

export function mapDispatchToProps(dispatch) {
  return {
    verifyEmailLoad: (token) => dispatch(verifyEmailLoad(token)),
  };
}

const mapStateToProps = createStructuredSelector({
  emailVerify: verifyEmail(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'emailconfirmed', reducer });
const withSaga = injectSaga({ key: 'emailconfirmed', saga });

export default compose(
 withReducer,
 withSaga,
 withConnect,
)(EmailConfirmed);
