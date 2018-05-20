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
import { membershipsLoad, changeUserType } from './actions';
import { makeSelectMemberships, userType } from './selectors';
import reducer from './reducer';
import Membership from '../../components/Memberships';

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
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.membershipsLoad();
  }

  renderMemberships = () => {
    if (!this.props.memberships) return <h1>Loading</h1>;
    return this.props.memberships.map((membership) => <Membership {...membership} />);
  }

  handleChange = (event, index, value) => this.setState({ value });

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleFiles = (files: Array<File>) => {
    this.file = files[0];
    this.forceUpdate();
    console.log(files);
  }

  handleFilesImage = (files: Array<File>) => {
    this.fileImage = files[0];
    this.forceUpdate();
    console.log(files);
  }

  handleTimeChange = (index) => (event, i, value) => {
    const newOpenTime = this.state.openTime.map((item, mapIndex) => {
      if (mapIndex === index) {
        return value;
      }
      return item;
    });
    this.setState({ openTime: newOpenTime });
  };

  handleTimeCloseChange = (index) => (event, i, value) => {
    const newCloseTime = this.state.closeTime.map((item, mapIndex) => {
      if (mapIndex === index) {
        return value;
      }
      return item;
    });
    this.setState({ closeTime: newCloseTime });
  };

  renderTableRows = () => ['Monday', 'Tuesday', 'Wesnesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => {
    const isClose = (this.state.openTime[index] === 0);

    const open = [<MenuItem value={0} key={'close'} primaryText={'Close'} />];
    for (let i = 0; i < 48; i++) {
      open.push(<MenuItem value={i + 1} key={i} primaryText={`${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`} />);
    }

    const close = [];
    for (let i = 0; i < 48; i++) {
      close.push(<MenuItem value={i + 1} key={i} primaryText={`${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`} />);
    }
    return (<tr>
      <td className="tg-yw4l">{day}</td>


      <td className="tg-yw4l" colSpan={isClose ? 2 : false}>
        <SelectField
          style={{ width: '100%' }}
          value={this.state.openTime[index]}
          onChange={this.handleTimeChange(index)}
          maxHeight={200}
        >
          {open}
        </SelectField>
      </td>

      {!isClose && <td className="tg-yw4l"><SelectField
        style={{ width: '100%' }}
        value={this.state.closeTime[index]}
        onChange={this.handleTimeCloseChange(index)}
        maxHeight={200}
      >
        {close}
      </SelectField></td>
        }


    </tr>);
  })

  renderTable = () => (<table className="tg" style={{ width: '80%', margin: 'auto', marginTop: '14px' }}>
    <tr>
      <th className="tg-qcjy">Day</th>
      <th Name="tg-yw4l">Opening Time</th>
      <th className="tg-yw4l">Closing Time</th>
    </tr>
    {this.renderTableRows()}
  </table>)

  renderBusiness =() => (
    <div>
      <div className="register-final-table">
        <div className="register-final-left-col">
          <TextField hintText="Name" style={{ width: '80%' }} />
          <TextField hintText="Phone number" style={{ width: '50%', verticalAlign: 'middle' }} />
          <RaisedButton label="Verify" style={{ width: '30%' }} />
          {this.renderTable()}
        </div>
        <div className="register-final-right-col">
          <TextField hintText="Business Name" style={{ width: '77%' }} />
          <TextField hintText="Business Contact Number" style={{ width: '77%' }} />
          <br />
          {this.file
            ? <ReactFileReader handleFiles={this.handleFiles}>
                <FileImage width="300" height="200" file={this.file} />
              </ReactFileReader>
            : <ReactFileReader handleFiles={this.handleFiles}>
                <img />
                <RaisedButton label="Choose Business Logo" style={style} />
              </ReactFileReader>
          }
          {this.fileImage
            ? <ReactFileReader handleFiles={this.handleFilesImage}>
                <FileImage width="300" height="200" file={this.fileImage} />
              </ReactFileReader>
            : <ReactFileReader handleFiles={this.handleFilesImage}>
                <img />
                <RaisedButton label="Choose Business Image" style={style} />
              </ReactFileReader>
          }
          <TextField hintText="City" style={{ width: '77%' }} />
          <TextField hintText="Message Field"
            floatingLabelText=" Business Description"
            multiLine
            rows={2}
            style={{ textAlign: 'left', height: '74px', width: '77%' }}
          />
        </div>
      </div>
      <br />
      <br />
      <p style={{ textAlign: 'center', fontSize: '20px', margin: 'auto', marginTop: '50px' }}>
        Please subscribe for a membership
      </p>
      <div style={{ height: '1px', width: '100%', background: 'grey', marginBottom: '30px', marginTop: '5px' }} />
      <div className="memberships-container">
        {this.renderMemberships()}
      </div>
    </div>
  )

  renderRegularUser = () => (
    <div className="register-final-table">
      <div className="register-final-left-col">
        <TextField hintText="Name" style={{ width: '80%' }} />
        <TextField hintText="Phone number" style={{ width: '50%', verticalAlign: 'middle' }} />
        <RaisedButton label="Verify"
          style={{ width: '30%' }}
        />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          className="underline-input type16 datepicker"
          style={{width: '110%', margin: 'auto'}}
          type="picker"
          name="birthday"
          placeholder="Birthday"
        />
        <TextField
          hintText="City"
          style={{ width: '80%' }}
        />
      </div>
      <div className="register-final-right-col">
        <TextField
          hintText="ID"
          style={{ width: '77%' }}
        />
        {this.file
          ? <ReactFileReader
              handleFiles={this.handleFiles}
            >
              <FileImage
                width="300"
                height="200"
                file={this.file}
              />
            </ReactFileReader>
          : <ReactFileReader
              handleFiles={this.handleFiles}
            >
              <img className="create-wedding__image" />
              <RaisedButton
                label="Choose Profile Picture"
                style={style}
              />
            </ReactFileReader>
        }
        {this.fileImage
          ? <ReactFileReader
              handleFiles={this.handleFilesImage}
            >
              <FileImage
                width="300"
                height="200"
                file={this.fileImage}
              />
            </ReactFileReader>
          : <ReactFileReader
              handleFiles={this.handleFilesImage}
            >
              <img className="create-wedding__image" />
              <RaisedButton
                label="Choose Baner Image"
                style={style}
              />
            </ReactFileReader>
        }
      </div>
    </div>
  )

  render(){
    return(
      <section id="page-small" className="u-cf">
        <form
          name="register-final"
          className="register-final-form"
        >
          <div className="page-small-single-col white-bg shadow rounded-corners u-cf email-confirm-container">
            <form
              onSubmit={this.props.EmailConfirmedForm}
              name="register-final"
            >
              <h3
                className="vertical-padding bold"
              >
                Please provide us with a few additional details.
              </h3>
              <SelectField
                value={this.props.userType}
                onChange={this.props.changeUserType}
                floatingLabelText="Select User Type"
                style={{ textAlign: 'left' }}
                name="category"
                className="contact-select type14 select-category">
                  <MenuItem value={1} primaryText="Regular User" />
                  <MenuItem value={2} primaryText="Business" />
              </SelectField>
              {this.props.userType === 1 && this.renderRegularUser()
              }
              {this.props.userType === 2 && this.renderBusiness()
              }
              {this.props.userType !== null && <input className="bold finish-button" type="submit" name="login" value="Finish" />}
            </form>
          </div>
        </form>
      </section>
    )
  }
}

Memberships.propTypes = {
  memberships: PropTypes.object,
  userType: PropTypes.number,
};

export function mapDispatchToProps(dispatch) {
  return {
    // EmailConfirmedForm: (evt) => {
    //   evt.preventDefault();
    //   dispatch(sendAdditionalDetails());
    // },
    membershipsLoad: () => dispatch(membershipsLoad()),
    changeUserType: (a, b, value) => dispatch(changeUserType(value)),
  };
}

const mapStateToProps = createStructuredSelector({
  memberships: makeSelectMemberships(),
  userType: userType(),

});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'emailconfirmed', reducer });
const withSaga = injectSaga({ key: 'emailconfirmed', saga });

export default compose(
 withReducer,
 withSaga,
 withConnect,
)(Memberships);
