import React from 'react';
import { Link } from 'react-router-dom';

import {
  NewProductProvider,
  NewProductConsumer,
} from '../contexts/NewProductContext';
import NewProductList from '../components/NewProductList';

export default class NewProductCT extends React.Component {
  render() {
    return (
      <NewProductProvider>
        <NewProductConsumer>
          {({ products }) => (
            <NewProductList
              as={Link}
              products={products.map(p => ({
                linkProps: { to: `/product/${p.id}` },
                ...p,
              }))}
            />
          )}
        </NewProductConsumer>
      </NewProductProvider>
    );
  }
}
