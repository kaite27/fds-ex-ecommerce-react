import React from 'react';

import ProductCategory from './ProductCategory';
import ProductItem from './ProductItem';

export default function ProductList() {
  return (
    <React.Fragment>
      <section class="product-page">
        <div class="rows">
          <div class="columns">
            <div class="column is-one-fifth product-category">
              <ProductCategory />
            </div>
            <div class="column product-container">
              <div class="search-control">
                <p class="control has-icons-left">
                  <input
                    class="input search-bar"
                    type="text"
                    placeholder="search"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-search" />
                  </span>
                  <button type="submit" class="btn btn-secondary">
                    Search
                  </button>
                </p>
              </div>
              <ProductItem />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
