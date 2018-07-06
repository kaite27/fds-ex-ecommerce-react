import React from 'react';
import { Link } from 'react-router-dom';

import ProductList from '../components/ProductList';
import { ProductProvider, ProductConsumer } from '../contexts/ProductContext';
import LoadingBox from '../components/LoadingBox';
export default class ProductsCT extends React.Component {
  state = {
    query: '',
  };
  updateSearchQuery = query => this.setState({ query });
  render() {
    return (
      <React.Fragment>
        <ProductProvider>
          <ProductConsumer>
            {({ loading, products, onCategory, productSearch }) =>
              loading ? (
                <LoadingBox />
              ) : (
                <ProductList
                  as={Link}
                  query={this.state.query}
                  onCategory={onCategory}
                  onSearch={productSearch}
                  onQueryChange={this.updateSearchQuery}
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
