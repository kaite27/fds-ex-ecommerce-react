import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';
import { LoginProvider, LoginConsumer } from '../contexts/LoginContext';

export default class LoginFormCT extends Component {
  render() {
    return (
      <LoginProvider>
        <LoginConsumer>
          {({ login }) => (
            <LoginForm
              onLogin={async (username, password) => {
                await login(username, password);
              }}
            />
          )}
        </LoginConsumer>
      </LoginProvider>
    );
  }
}
