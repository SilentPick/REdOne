import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import membershipsSaga from '../../sagas/memberships';
import { membershipsSelectors } from '../../selectors';
import { membershipsActions, membershipsReducer } from '../../redux-main';
import messages from './messages';
import { FormattedMessage } from 'react-intl';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RegularUser from '../../components/RegularUser';
import Business from '../../components/Business';

class Memberships extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      openTime: [null, null, null, null, null, null, null],
      closeTime: [null, null, null, null, null, null, null],
    };
  }

  componentDidMount() {
    this.props.membershipsLoad();
  }

  render(){
    return(
      <div>
        <Header></Header>
        <section id="page-small" className="u-cf">
          <form
            onSubmit={this.props.sendTypePages}
            name="register-final"
            className="register-final-form"
          >
            <div className="page-small-single-col white-bg shadow rounded-corners u-cf email-confirm-container">
              <form

                name="register-final"
              >
                <h3
                  className="vertical-padding bold top-text"
                >
                  <FormattedMessage {...messages.headerText} />
                </h3>
                <SelectField
                  value={this.props.userType}
                  onChange={this.props.changeUserType}
                  floatingLabelText={<FormattedMessage {...messages.userType} />}
                  style={{ textAlign: 'left' }}
                  name="category"
                  className="contact-select type14 select-category"
                >
                  <MenuItem value={1} primaryText={<FormattedMessage {...messages.regularType} />} />
                  <MenuItem value={2} primaryText={<FormattedMessage {...messages.businessType} />} />
                </SelectField>
                {this.props.userType === 1 && <RegularUser changeFormInput={this.props.changeFormInput} formInputs={this.props.formInputs}/>
                }
                {this.props.userType === 2 && <Business changeFormInput={this.props.changeFormInput} formInputs={this.props.formInputs} memberships={this.props.memberships}/>
                }
                {this.props.userType !== null && <FormattedMessage {...messages.finishBtn}>
                  {(message) => (<input
                    className="bold finish-button"
                    type="submit"
                    name="login"
                    value={message}
                  />)}
                </FormattedMessage>}
              </form>
            </div>
          </form>
        </section>
        <Footer></Footer>
      </div>
    )
  }
}

Memberships.propTypes = {
  sendTypePages: PropTypes.func,
  memberships: PropTypes.object,
  userType: PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    sendTypePages: (evt) => {
      evt.preventDefault();
      dispatch(membershipsActions.sendTypePages());
    },
    membershipsLoad: () => dispatch(membershipsActions.membershipsLoad()),
    changeUserType: (a, b, value) => dispatch(membershipsActions.changeUserType(value)),
    changeFormInput: (inputName) => (e) => dispatch(membershipsActions.changeFormInput(e.target.value, inputName))
  };
}

const mapStateToProps = createStructuredSelector({
  memberships: membershipsSelectors.makeSelectMemberships(),
  userType: membershipsSelectors.userType(),
  formInputs: membershipsSelectors.formInputs(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'selectmemberships', reducer: membershipsReducer });
const withSaga = injectSaga({ key: 'selectmemberships', saga: membershipsSaga });

export default compose(
 withReducer,
 withSaga,
 withConnect,
)(Memberships);
