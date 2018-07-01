import React from 'react';

import {
  DetailProductProvider,
  DetailProductConsumer,
} from '../contexts/DetailProductContext';
import { DetailCommentProvider } from '../contexts/DetailCommentsFormContext.js';
import DetailProduct from '../components/DetailProduct';
import DetailTabs from '../components/DetailTabs';

export default class DetailProductCT extends React.Component {
  render() {
    const { id } = this.props;
    return (
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
            subTotal,
            total,
            salesTax,
            onPriceCalculate,
            onUpdateColor,
            onUpdateSize,
          }) => (
            <React.Fragment>
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
                subTotal={subTotal}
                total={total}
                salesTax={salesTax}
                onPriceCalculate={onPriceCalculate}
                onUpdateColor={onUpdateColor}
                onUpdateSize={onUpdateSize}
              />
              <DetailTabs />
            </React.Fragment>
          )}
        </DetailProductConsumer>
      </DetailProductProvider>
    );
  }
}
