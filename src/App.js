import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import LoginPage from './pages/LoginPage';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>TEST!Push</div>
        <LoginPage />
      </React.Fragment>
    );
  }
}
