import React from 'react';
import ReactFileReader from 'react-file-reader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FileImage from 'react-image-file';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import Membership from '../Memberships';
import messages from './messages';
import { FormattedMessage } from 'react-intl';

const style = {
  marginTop: 12,
  width: '100%',
};

class Business extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      openTime: [null, null, null, null, null, null, null],
      closeTime: [null, null, null, null, null, null, null],
    };
  }

  renderMemberships = () => {
    if (!this.props.memberships) return <h1>Loading</h1>;
    return this.props.memberships.map((membership) => <Membership {...membership} />);
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
    const open = [<MenuItem value={0} key={'close'} primaryText={<FormattedMessage {...messages.closeStatus} />} />];
    for (let i = 0; i < 48; i++) {
      open.push(<MenuItem value={i + 1} key={i} primaryText={`${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`} />);
    }
    const close = [];
    for (let i = 0; i < 48; i++) {
      close.push(<MenuItem value={i + 1} key={i} primaryText={`${Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`} />);
    }
    return (
      <tr>
        <td className="day tg-yw4l">{<FormattedMessage {...messages["day" + index]} />}</td>
        <td className="tg-yw4l" colSpan={isClose ? 2 : false}>
          <SelectField
            labelStyle={{paddingRight: '0px'}}
            iconStyle={{display: 'none'}}
            style={{ width: '100%'}}
            value={this.state.openTime[index]}
            onChange={this.handleTimeChange(index)}
            maxHeight={200}
          >
          {open}
          </SelectField>
        </td>
        {!isClose
          &&
          <td className="tg-yw4l">
            <SelectField
              labelStyle={{paddingRight: '0px'}}
              iconStyle={{display: 'none'}}
              style={{ width: '100%' }}
              value={this.state.closeTime[index]}
              onChange={this.handleTimeCloseChange(index)}
              maxHeight={200}
            >
            {close}
            </SelectField>
          </td>
        }
      </tr>
    );
  })

  renderTable = () => (
    <table
      className="tg"
      style={{ width: '80%', margin: 'auto', marginTop: '14px' }}
    >
      <tr className="table-header">
        <th className="tg-qcjy">{<FormattedMessage {...messages.tableDay} />}</th>
        <th Name="open-time tg-yw4l">{<FormattedMessage {...messages.openingTime} />}</th>
        <th className="tg-yw4l">{<FormattedMessage {...messages.closingTime} />}</th>
      </tr>
      {this.renderTableRows()}
    </table>
  )

  handleFilesImage = (files) => {
    this.fileImage = files[0];
    this.forceUpdate();
    this.props.changeFormInput('bannerImage')({target: {value: files[0]}})
  }

  handleFiles = (files) => {
    this.file = files[0];
    this.forceUpdate();
    this.props.changeFormInput('businessLogo')({target: {value: files[0]}})
  }

  render() {
    return (
      <div>
        <div className="register-final-table">
          <div className="register-final-left-col">
            <TextField hintText={<FormattedMessage {...messages.nameInput} />}
              value={this.props.formInputs.name}
              onChange={this.props.changeFormInput('name')}
              style={{ width: '80%' }}
            />
            <TextField
              hintText={<FormattedMessage {...messages.phoneInput} />}
              value={this.props.formInputs.phoneNumber}
              onChange={this.props.changeFormInput('phoneNumber')}
              style={{ width: '50%', verticalAlign: 'middle' }}
            />
            <RaisedButton label={<FormattedMessage {...messages.verifyBtn} />} style={{ width: '30%' }} />
            {this.renderTable()}
          </div>
          <div className="register-final-right-col">
            <TextField
              hintText={<FormattedMessage {...messages.businessName} />}
              value={this.props.formInputs.contactName}
              onChange={this.props.changeFormInput('contactName')}
              style={{ width: '77%' }}
            />
            <TextField
              hintText={<FormattedMessage {...messages.businessNumber} />}
              value={this.props.formInputs.contactNumber}
              onChange={this.props.changeFormInput('contactNumber')}
              style={{ width: '77%' }}
            />
            <br />
            {this.file
              ? <ReactFileReader handleFiles={this.handleFiles}>
                  <FileImage width="300" height="200" file={this.file} />
                </ReactFileReader>
              : <ReactFileReader handleFiles={this.handleFiles}>
                  <img />
                  <RaisedButton label={<FormattedMessage {...messages.businessLogo} />} style={style} />
                </ReactFileReader>
            }
            {this.fileImage
              ? <ReactFileReader handleFiles={this.handleFilesImage}>
                  <FileImage width="300" height="200" file={this.fileImage} />
                </ReactFileReader>
              : <ReactFileReader handleFiles={this.handleFilesImage}>
                  <img />
                  <RaisedButton label={<FormattedMessage {...messages.banerImage} />} style={style} />
                </ReactFileReader>
            }
            <TextField
              hintText={<FormattedMessage {...messages.cityInput} />}
              value={this.props.formInputs.location}
              onChange={this.props.changeFormInput('location')}
              style={{ width: '77%' }}
            />
            <TextField
              hintText="Message Field"
              floatingLabelText={<FormattedMessage {...messages.descriptionInput} />}
              value={this.props.formInputs.serviceDescription}
              onChange={this.props.changeFormInput('serviceDescription')}
              multiLine
              rows={2}
              style={{ textAlign: 'left', height: '74px', width: '77%' }}
            />
          </div>
        </div>
        <br />
        <br />
        <p style={{ textAlign: 'center', fontSize: '20px', margin: 'auto', marginTop: '50px' }}>
          <FormattedMessage {...messages.middleText} />
        </p>
        <div style={{ height: '1px', width: '100%', background: 'grey', marginBottom: '30px', marginTop: '5px' }} />
        <div className="memberships-container">
          {this.renderMemberships()}
        </div>
      </div>
    )
  }
}

export default Business;
