import React from 'react';
import { Link } from 'react-router-dom';

import {
  DetailProductProvider,
  DetailProductConsumer,
} from '../contexts/DetailProductContext';

import DetailProduct from '../components/DetailProduct';
import DetailTabs from '../components/DetailTabs';

export default class DetailProductCT extends React.Component {
  render() {
    return (
      <DetailProductProvider>
        <DetailProductConsumer>
          {({ productTitle }) => <DetailProduct productTitle={productTitle} />}
          <DetailTabs />
        </DetailProductConsumer>
      </DetailProductProvider>
    );
  }
}
