import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailProductBreadcrumb({
  onCategory,
  category,
  productId,
}) {
  return (
    <React.Fragment>
      <div className="rows">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li className="breadcrumb-home">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-product">
              <Link to="/product">Products</Link>
            </li>
            <li
              className="breadcrumb-category"
              onClick={category => onCategory(category)}
            >
              <Link>{category}</Link>
            </li>
            <li className="is-active breadcrumb-sku">
              <Link>{productId}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}
