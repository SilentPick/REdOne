  import React from 'react';
  import ReactFileReader from 'react-file-reader';
  import Snackbar from 'material-ui/Snackbar';
  import TextField from 'material-ui/TextField';
  import RaisedButton from 'material-ui/RaisedButton';
  import DatePicker from 'material-ui/DatePicker';
  import FileImage from 'react-image-file';
  import messages from './messages';
  import { FormattedMessage } from 'react-intl';

  const style = {
    marginTop: 12,
    width: '100%',
  };

  class RegularUser extends React.Component { // eslint-disable-line react/prefer-stateless-function

    constructor(props) {
      super(props);
      this.state = {
        controlledDate: null,
        inputChange: false,
        open: true,
      };
    }

    handleActionClick = () => {
     this.setState({
       open: false,
     });
   };



    handleProfilePic = (files) => {
      this.file = files[0];
      this.forceUpdate();
      this.props.changeFormInput('picture')({target: {value: files[0]}})
    }

    handleChange = (event, date) => {
      this.props.changeFormInput('birthday')({target: {value: date}})
    };

    handleFilesImage = (files) => {
      this.fileImage = files[0];
      this.forceUpdate();
      this.props.changeFormInput('bannerImage')({target: {value: files[0]}})
    }

    handleChangeInput =() =>{
      this.setState({
        inputChange: true
      })
    }

    render() {
      return (
        <div className="register-final-table">
          <div className="register-final-left-col">
            <TextField
              hintText={<FormattedMessage {...messages.nameInput} />}
              value={this.props.formInputs.name}
              onChange={this.props.changeFormInput('name')}
              style={{ width: '80%' }}
            />
            {!this.state.inputChange ?[<TextField
              hintText={<FormattedMessage {...messages.phoneInput} />}
              value={this.props.formInputs.phoneNumber}
              onChange={this.props.changeFormInput('phoneNumber')}
              style={{ width: '50%', verticalAlign: 'middle' }}
            />,
            <RaisedButton label={<FormattedMessage {...messages.verifyBtn} />}
              style={{ width: '30%' }}
              onClick={
                this.handleChangeInput
              }
            />]
            :[<TextField
              hintText={<FormattedMessage {...messages.codeInput} />}
              value={this.props.formInputs.phoneNumber}
              onChange={this.props.changeFormInput('phoneNumber')}
              style={{margin: 'auto', width: '80%', verticalAlign: 'middle' }}
            />,<Snackbar
            action="Re-send"
            open={this.state.open}
            message="Did not receive your letter?"
            onActionClick={this.handleActionClick}
            onRequestClose={(clickaway) => null}
          />]}
            <DatePicker
              className="datepicker"
              style={{ margin: 'auto'}}
              textFieldStyle={{width: '80%'}}
              hintText={<FormattedMessage {...messages.birthdayInput} />}
              value={this.props.formInputs.birthday}
              onChange={this.handleChange}
            />

            <TextField
              hintText={<FormattedMessage {...messages.cityInput} />}
              value={this.props.formInputs.location}
              onChange={this.props.changeFormInput('location')}
              style={{ width: '80%' }}
            />
          </div>
          <div className="register-final-right-col">
            <TextField
              hintText={<FormattedMessage {...messages.idInput} />}
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
                  <img />
                  <RaisedButton
                    label={<FormattedMessage {...messages.profilePicture} />}
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
                  <img />
                  <RaisedButton
                    label={<FormattedMessage {...messages.banerImage} />}
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
