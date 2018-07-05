import React from 'react';
import { Link } from 'react-router-dom';

import {
  BestSellingProvider,
  BestSellingConsumer,
} from '../contexts/BestSellingContext';
import BestSellingList from '../components/BestSellingList';
import LoadingBox from '../components/LoadingBox';
export default class NewProductCT extends React.Component {
  render() {
    return (
      <BestSellingProvider>
        <BestSellingConsumer>
          {({ loading, products }) =>
            loading ? (
              <LoadingBox />
            ) : (
              <BestSellingList
                as={Link}
                products={products.map(p => ({
                  linkProps: { to: `/product/${p.id}` },
                  ...p,
                }))}
              />
            )
          }
        </BestSellingConsumer>
      </BestSellingProvider>
    );
  }
}
