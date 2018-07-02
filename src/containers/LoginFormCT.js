import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import { LoginProvider, LoginConsumer } from '../contexts/LoginContext';

export default class LoginFormCT extends Component {
  state = {
    success: false,
  };

  render() {
    const { success } = this.state;
    if (success) return <Redirect to="/" />;
    return (
      <LoginProvider>
        <LoginConsumer>
          {({ login }) => (
            <LoginForm
              onLogin={async (username, password) => {
                try {
                  await login(username, password);
                  this.setState({ success: true });
                } catch (e) {
                  if (e.response && e.response.status === 400) {
                    alert('Invalid username and password!');
                    this.setState({ success: false });
                  } else {
                    alert('Network error. Please try again.');
                  }
                }
              }}
            />
          )}
        </LoginConsumer>
      </LoginProvider>
    );
  }
}
