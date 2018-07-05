import React from 'react';
import BestSellingItem from './BestSellingItem';

export default function BestSellingList({ products = [] } = {}) {
  return (
    <React.Fragment>
      <section className="new-products" id="new-product">
        <div className="rows">
          <h2>Best Selling Items</h2>
        </div>
        <div className="rows">
          <div className="new-products-list">
            {products.map(product => (
              <BestSellingItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
