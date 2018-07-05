import React from 'react';

import ProductCategory from './ProductCategory';
import ProductItem from './ProductItem';

export default function ProductList({
  products = [],
  onCategory = category => {},
  loading = false,
}) {
  return (
    <React.Fragment>
      <section className="product-page">
        <div className="rows">
          <div className="columns">
            <div className="column is-one-fifth product-category">
              <ProductCategory onCategory={onCategory} />
            </div>
            <div className="column product-container">
              <div className="search-control">
                <p className="control has-icons-left">
                  <input
                    className="input search-bar"
                    type="text"
                    placeholder="search"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-search" />
                  </span>
                  <button type="submit" className="btn btn-secondary">
                    Search
                  </button>
                </p>
              </div>
              {products.map(product => (
                <ProductItem key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
