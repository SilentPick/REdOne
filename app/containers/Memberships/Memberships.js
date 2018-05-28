import React from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import ImageLoader from 'react-image-file';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ReactFileReader from 'react-file-reader';
import FileImage from 'react-image-file';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import { membershipsLoad, changeUserType, changeFormInput, sendTypePages } from './actions';
import { makeSelectMemberships, userType, formInputs } from './selectors';
import reducer from './reducer';
import Membership from '../../components/Memberships';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RegularUser from '../../components/RegularUser';
import Business from '../../components/Business';

const style = {
  marginTop: 12,
  width: '100%',
};

const styles = {
  customWidth: {
    width: 150,
  },
};

class Memberships extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      openTime: [null, null, null, null, null, null, null],
      closeTime: [null, null, null, null, null, null, null],
      startDate: '',
    };
    this.handleChange = this.handleChangePicker.bind(this);
  }

  componentDidMount() {
    this.props.membershipsLoad();
  }

  handleChange = (event, index, value) => this.setState({ value });

  handleChangePicker(date) {
    this.setState({
      startDate: date,
    });
  }

  render(){
    return(
      <div>
        <Header></Header>
        <section id="page-small" className="u-cf">
          <form
            name="register-final"
            className="register-final-form"
          >
            <div className="page-small-single-col white-bg shadow rounded-corners u-cf email-confirm-container">
              <form
                onSubmit={this.props.sendTypePages}
                name="register-final"
              >
                <h3
                  className="vertical-padding bold top-text"
                >
                  Please provide us with a few additional details.
                </h3>
                <SelectField
                  value={this.props.userType}
                  onChange={this.props.changeUserType}
                  floatingLabelText="Select User Type"
                  style={{ textAlign: 'left' }}
                  name="category"
                  className="contact-select type14 select-category"
                >
                  <MenuItem value={1} primaryText="Regular User" />
                  <MenuItem value={2} primaryText="Business" />
                </SelectField>
                {this.props.userType === 1 && <RegularUser changeFormInput={this.props.changeFormInput} formInputs={this.props.formInputs}/>
                }
                {this.props.userType === 2 && <Business changeFormInput={this.props.changeFormInput} formInputs={this.props.formInputs} memberships={this.props.memberships}/>
                }
                {this.props.userType !== null && <input className="bold finish-button" type="submit" name="login" value="Finish" />}
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
  memberships: PropTypes.object,
  userType: PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    sendTypePages: (evt) => {
      evt.preventDefault();
      dispatch(sendTypePages());
    },
    membershipsLoad: () => dispatch(membershipsLoad()),
    changeUserType: (a, b, value) => dispatch(changeUserType(value)),
    changeFormInput: (inputName) => (e) => dispatch(changeFormInput(e.target.value, inputName))
  };
}

const mapStateToProps = createStructuredSelector({
  memberships: makeSelectMemberships(),
  userType: userType(),
  formInputs: formInputs(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'emailconfirmed', reducer });
const withSaga = injectSaga({ key: 'emailconfirmed', saga });

export default compose(
 withReducer,
 withSaga,
 withConnect,
)(Memberships);
