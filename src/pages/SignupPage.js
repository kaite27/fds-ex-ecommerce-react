import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import SignupFormCT from '../containers/SignupFormCT';
export default class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <SignupFormCT />
      </React.Fragment>
    );
  }
}
