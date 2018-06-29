import React from 'react';

import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';

export default class ProductsCT extends React.Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ProductList />
      </React.Fragment>
    );
  }
}
