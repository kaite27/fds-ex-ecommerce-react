import React, { Component } from 'react';

import CartCT from '../containers/CartCT';
import NavBarCT from '../containers/NavBarCT';

export default class CartPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <CartCT />
      </React.Fragment>
    );
  }
}
