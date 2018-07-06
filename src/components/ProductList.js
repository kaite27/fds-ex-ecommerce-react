import React from 'react';

import ProductCategory from './ProductCategory';
import ProductItem from './ProductItem';

export default class ProductList extends React.Component {
  render() {
    const { products, onCategory, onQueryChange, onSearch, query } = this.props;
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
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      onSearch(query);
                    }}
                  >
                    <p className="control has-icons-left">
                      <input
                        className="input search-bar"
                        type="text"
                        placeholder="search"
                        value={query}
                        onChange={e => onQueryChange(e.target.value)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-search" />
                      </span>
                      <button type="submit" className="btn btn-secondary">
                        Search
                      </button>
                    </p>
                  </form>
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
}
