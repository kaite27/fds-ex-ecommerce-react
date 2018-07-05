import React, { Component } from 'react';

import ProductsCT from '../containers/ProductsCT';
import NavBarCT from '../containers/NavBarCT';
export default class ProductPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <ProductsCT />
      </React.Fragment>
    );
  }
}
