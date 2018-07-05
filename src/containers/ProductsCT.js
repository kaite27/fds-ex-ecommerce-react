import React from 'react';
import { Link } from 'react-router-dom';

import ProductList from '../components/ProductList';
import { ProductProvider, ProductConsumer } from '../contexts/ProductContext';
import LoadingBox from '../components/LoadingBox';
export default class ProductsCT extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ProductProvider>
          <ProductConsumer>
            {({ loading, products, onCategory }) =>
              loading ? (
                <LoadingBox />
              ) : (
                <ProductList
                  as={Link}
                  onCategory={onCategory}
                  loading={loading}
                  products={products.map(p => ({
                    linkProps: { to: `/product/${p.id}` },
                    ...p,
                  }))}
                />
              )
            }
          </ProductConsumer>
        </ProductProvider>
      </React.Fragment>
    );
  }
}
