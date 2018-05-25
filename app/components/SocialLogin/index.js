import React from 'react';
import { OldSocialLogin as SocialLogin } from 'react-social-login';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { history } from 'app';
import request from 'utils/request';


class Social extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleSocialLogin = (params) => {
    request('http://redvalley.westeurope.cloudapp.azure.com/oauth', {
      method: 'post',
      body: JSON.stringify({
        provider: params._provider,
        idToken: params._token.idToken
      }),
    }).then(() => {
      saveToken(res.access_token),
      history.push("/Memberships")
    })
  };

  render() {
    return (
      <div>
        <SocialLogin
          provider="facebook"
          appId="950746635099026"
          callback={this.handleSocialLogin}
        >
          <i
            className="fa fa-facebook type16 social-icon-login"
            aria-hidden="true"
          >
          </i>
          <button
            className="login-facebook bold"
          >
            <FormattedMessage {...messages.socialButtons} />
            Facebook
          </button>
        </SocialLogin>
        <SocialLogin
          provider="google"
          appId="353004601792-s5vg55h77u9i83eoa0ep79e9vh10tls5.apps.googleusercontent.com"
          callback={this.handleSocialLogin}
        >
          <i
            className="fa fa-twitter type16 social-icon-login"
            aria-hidden="true"
          >
          </i>
          <button
            className="login-twitter bold type16"
          >
            <FormattedMessage {...messages.socialButtons} />
            Google
          </button>
        </SocialLogin>
      </div>
    )
  }
}

export default Social;
