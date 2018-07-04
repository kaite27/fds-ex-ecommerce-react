import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { LoginProvider, LoginConsumer } from '../contexts/LoginContext';

export default class LoginFormCT extends Component {
  render() {
    return (
      <LoginProvider>
        <LoginConsumer>
          {({ login, success }) =>
            success ? <Redirect to="/" /> : <LoginForm onLogin={login} />
          }
        </LoginConsumer>
      </LoginProvider>
    );
  }
}
