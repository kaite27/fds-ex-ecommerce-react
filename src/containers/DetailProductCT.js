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
    const { id } = this.props;
    return (
      // <DetailProductProvider>
      //   <DetailProductConsumer>
      //     {({ productTitle }) => <DetailProduct productTitle={productTitle} />}
      //     <DetailTabs />
      //   </DetailProductConsumer>
      // </DetailProductProvider>
      <React.Fragment>
        <DetailProductProvider id={id}>
          <DetailProductConsumer>
            {({
              colors,
              sizes,
              productId,
              productTitle,
              productDesc,
              imageURL,
              category,
              color,
              size,
              quantity,
              attrSKU,
              productMarketPrice,
              productUnitPrice,
            }) => (
              <DetailProduct
                colors={colors}
                sizes={sizes}
                productId={productId}
                productTitle={productTitle}
                productDesc={productDesc}
                imageURL={imageURL}
                category={category}
                color={color}
                size={size}
                quantity={quantity}
                attrSKU={attrSKU}
                productMarketPrice={productMarketPrice}
                productUnitPrice={productUnitPrice}
              />
            )}
          </DetailProductConsumer>
        </DetailProductProvider>
        <DetailTabs />
      </React.Fragment>
    );
  }
}
