import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import SignupPage from './pages/SignupPage';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/product/:id" component={DetailPage} />
          <Route exact path="/product" component={ProductPage} />
          <Route path="/my-cart" component={CartPage} />
          <Route path="/register" component={SignupPage} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
