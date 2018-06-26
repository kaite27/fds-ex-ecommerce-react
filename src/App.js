import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <LoginPage path="/login" component={LoginPage} />
            <DetailPage path="/detail" component={DetailPage} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
