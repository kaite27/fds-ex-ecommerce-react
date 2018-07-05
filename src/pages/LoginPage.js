import React, { Component } from 'react';

import LoginFormCT from '../containers/LoginFormCT';
import NavBarCT from '../containers/NavBarCT';

export default class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <LoginFormCT />
      </React.Fragment>
    );
  }
}
