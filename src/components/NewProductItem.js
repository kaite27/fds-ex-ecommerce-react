import React from 'react';
import { Link } from 'react-router-dom';

export default function NewProductItem({
  id,
  title,
  unitPrice,
  marketPrice,
  imageURL,
}) {
  return (
    <React.Fragment>
      <div className="full-box offScreen">
        <div className="lds-roller">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div className="new-products-items card">
        <div className="new-products-img">
          <img
            className="product-page__img--main"
            alt="New Item 01"
            src={imageURL}
          />
        </div>
        <div className="new-products-items__card">
          <span className="new-products-items__title">{title}</span>
          <span className="new-products-badge badge badge-success">New</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="list-group-item__unitPrice">{unitPrice}</span>
            <strong>
              <span className="list-group-item__marketPrice">
                {marketPrice}
              </span>
            </strong>
          </li>
        </ul>
        <div className="new-products-items__card">
          <Link to={`/products/${id}`} className="card-link btn btn-success">
            View Detail
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
