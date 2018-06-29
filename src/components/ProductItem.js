import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductItem({
  id, // to use as a product id
  colors,
  sizes,
  title,
  desc,
  category,
  accSoldCnt,
  unitPrice,
  marketPrice,
  imageURL,
}) {
  return (
    <div className="column is-one-third product-page__li">
      <div className="product-page__box card">
        <div className="img-box">
          <Link className="link-to-product-detail" to={`/product/${id}`}>
            <img
              className="product-page__img--main"
              src={imageURL}
              alt={title}
            />
            <Link to={`/`} className="img-box__btn card-link btn btn-success">
              <i className="icon-wish far fa-heart" /> Wish
            </Link>
          </Link>
        </div>
        <div className="product-page__card">
          <p className="product-page__title">{title}</p>
          <p className="product-page__desc">{desc}</p>
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
          <li className="list-group-item">
            <p>Options :</p>
            <div className="divider" />
            <p className="list-group-item__variants">
              Colors :{' '}
              <span className="list-group-item__color">{colors + ''}</span>
            </p>
            <p className="list-group-item__variants">
              Size : <span className="list-group-item__size">{sizes + ''}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
