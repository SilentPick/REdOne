import React from 'react';
import ReactFileReader from 'react-file-reader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'react-datepicker';
import FileImage from 'react-image-file';

const style = {
  marginTop: 12,
  width: '100%',
};

class RegularUser extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleProfilePic = (files: Array<File>) => {
    this.file = files[0];
    this.forceUpdate();
    this.props.changeFormInput('picture')(files[0])
  }

  handleFilesImage = (files: Array<File>) => {
    this.fileImage = files[0];
    this.forceUpdate();
    this.props.changeFormInput('bannerImage')({target: {value: files[0]}})
  }

  render() {
    return (
      <div className="register-final-table">
        <div className="register-final-left-col">
          <TextField
            hintText="Name"
            value={this.props.formInputs.name}
            onChange={this.props.changeFormInput('name')}
            style={{ width: '80%' }}
          />
          <TextField
            hintText="Phone number"
            value={this.props.formInputs.phoneNumber}
            onChange={this.props.changeFormInput('phoneNumber')}
            style={{ width: '50%', verticalAlign: 'middle' }}
          />
          <RaisedButton label="Verify"
            style={{ width: '30%' }}
          />
          <DatePicker
            className="underline-input type16 datepicker"
            style={{width: '110%', margin: 'auto'}}
            type="picker"
            name="birthday"
            placeholder="Birthday"
          />
          <TextField
            hintText="City"
            value={this.props.formInputs.location}
            onChange={this.props.changeFormInput('location')}
            style={{ width: '80%' }}
          />
        </div>
        <div className="register-final-right-col">
          <TextField
            hintText="ID"
            value={this.props.formInputs.idNumber}
            onChange={this.props.changeFormInput('idNumber')}
            style={{ width: '77%' }}
          />
          {this.file
            ? <ReactFileReader
                handleFiles={this.handleProfilePic}
              >
                <FileImage
                  width="300"
                  height="200"
                  file={this.file}
                />
              </ReactFileReader>
            : <ReactFileReader
                handleFiles={this.handleProfilePic}
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
  }
}

export default RegularUser;
