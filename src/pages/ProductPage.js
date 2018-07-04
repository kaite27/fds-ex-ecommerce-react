import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import ProductsCT from '../containers/ProductsCT';

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
