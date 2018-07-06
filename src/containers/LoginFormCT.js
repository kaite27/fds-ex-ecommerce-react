import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { LoginProvider, LoginConsumer } from '../contexts/LoginContext';
import LoadingBox from '../components/LoadingBox';

export default class LoginFormCT extends Component {
  render() {
    return (
      <LoginProvider>
        <LoginConsumer>
          {({ login, success, loading }) =>
            localStorage.getItem('username') || success ? (
              <Redirect to="/" />
            ) : loading ? (
              <LoadingBox />
            ) : (
              <LoginForm onLogin={login} />
            )
          }
        </LoginConsumer>
      </LoginProvider>
    );
  }
}
