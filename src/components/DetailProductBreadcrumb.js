import React from 'react';
import { Link } from 'react-router-dom';

export default function DetailProductBreadcrumb() {
  return (
    <React.Fragment>
      <div className="rows">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li className="breadcrumb-home">
              <Link to="#">Home</Link>
            </li>
            <li className="breadcrumb-product">
              <Link to="#">Products</Link>
            </li>
            <li className="breadcrumb-category">
              <Link to="#">category</Link>
            </li>
            <li className="is-active breadcrumb-sku">
              <Link to="#">productSKU</Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}
