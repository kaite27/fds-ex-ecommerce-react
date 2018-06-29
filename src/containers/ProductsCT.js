import React from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';
import { ProductProvider, ProductConsumer } from '../contexts/ProductContext';

export default class ProductsCT extends React.Component {
  state = {
    loading: false,
  };
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ProductProvider>
          <ProductConsumer>
            {({ products }) => (
              <ProductList
                as={Link}
                products={products.map(p => ({
                  linkProps: { to: `/product/${p.id}` },
                  ...p,
                }))}
              />
            )}
          </ProductConsumer>
        </ProductProvider>
      </React.Fragment>
    );
  }
}
