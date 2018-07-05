import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import SignupForm from '../components/SignupForm';
import { SignupProvider, SignConsumer } from '../contexts/SignupContext';

export default class SignupFormCT extends Component {
  render() {
    return (
      <SignupProvider>
        <SignConsumer>
          {({ signup, success }) =>
            success ? <Redirect to="/" /> : <SignupForm onSignup={signup} />
          }
        </SignConsumer>
      </SignupProvider>
    );
  }
}
