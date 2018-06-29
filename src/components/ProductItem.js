import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductItem({
  id, // comment's id on json server
  Colors,
  Sizes,
  title,
  desc,
  unitPrice,
  marketPrice,
  imageURL,
}) {
  return (
    <div className="column is-one-third product-page__li">
      <div className="product-page__box card">
        <Link className="link-to-product-detail" to={`/product/${id}`} />
        <div className="img-box">
          <img
            className="product-page__img--main"
            src="images/slide-1.jpg"
            alt="New Item 01"
          />
          <Link to="/" className="img-box__btn card-link btn btn-success">
            <i className="icon-wish far fa-heart" /> Wish
          </Link>
        </div>
        <div className="product-page__card">
          <p className="product-page__title" />
          <p className="product-page__desc" />
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="list-group-item__unitPrice" />
            <strong>
              <span className="list-group-item__marketPrice" />
            </strong>
          </li>
          <li className="list-group-item">
            <p>Options :</p>
            <div className="divider" />
            <p className="list-group-item__variants">
              Colors : <span className="list-group-item__color">Red</span>
            </p>
            <p className="list-group-item__variants">
              Size : <span className="list-group-item__size">10</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
