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
            <Route path="/login" component={LoginPage} />
            <Route path="/detail/:id" component={DetailPage} />
            <Route exact path="/" component={MainPage} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
