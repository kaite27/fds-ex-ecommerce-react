import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function DetailProduct() {
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
              <Link to="#" className="breadcrumb-cat">
                category
              </Link>
            </li>
            <li className="is-active breadcrumb-sku">
              <Link to="#" aria-current="page" className="breadcrumb-sku-a">
                productSKU
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="rows">
        <div className="columns">
          <div className="column is-one-third">
            <div className="img-box-big">
              <img
                className="product-page__img--main-big"
                src="images/slide-1.jpg"
                alt="Detail"
              />
              <div className="img-container">
                <img
                  className="img-container__list img-list-1"
                  src="https://image.freepik.com/free-photo/flowers-near-hat-and-dress_23-2147801034.jpg"
                  alt="Detail"
                />
                <img
                  className="img-container__list img-list-2"
                  src="https://image.freepik.com/free-photo/stunning-lady-in-pink-dress-poses-in-rays-of-morning-sun-on-the_1304-4767.jpg"
                  alt="Detail"
                />
                <img
                  className="img-container__list img-list-3"
                  src="https://image.freepik.com/free-photo/bride-dancing-in-front-of-building_1304-4133.jpg"
                  alt="Detail"
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="product-info-box">
              <p className="product-detail-page__sku">SKU 242423243</p>
              <p className="product-detail-page__title">Title</p>
              <p className="product-detail-page__desc">desc</p>
              <form method="POST">
                <div className="field">
                  <div className="control">
                    <span className="list-group-item__variants">Colors :</span>
                    <div className="select is-success">
                      {/* <!-- 삽입! --> */}
                      <select
                        className="option-list attribute-list-color"
                        name="color"
                        id="color"
                      >
                        TEST SELCT
                      </select>
                      {/* <!-- 삽입! --> */}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <span className="list-group-item__variants">Size :</span>
                    <div className="select is-success">
                      {/* <!-- 삽입! --> */}
                      <select
                        className="option-list attribute-list-size"
                        name="size"
                        id="size"
                      />
                      {/* <!-- 삽입! --> */}
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <span className="list-group-item__variants">
                      Quantity :
                    </span>
                    <div className="input is-success">
                      <input
                        type="number"
                        name="quantity"
                        className="input option-quantity"
                        min="1"
                        value="1"
                        data-toggle="tooltip"
                        title="No more!"
                      />
                    </div>
                    <span className="option-quantity-remain-box">
                      {' '}
                      <span className="option-quantity-remain">10</span> item(s)
                      left
                    </span>
                  </div>
                </div>
                <div className="price-info">
                  <div className="divider" />
                  <div className="price-subtotal">
                    <span className="price-tab price-subtotal__text">
                      Subtotal
                    </span>
                    $<span className="price-tab price-subtotal__value" />
                  </div>
                  <div className="price-tax">
                    <span className="price-tab price-tax__text">
                      Salse Tax <span>(6.875%)</span>
                    </span>
                    $<span className="price-tab price-tax__value" />
                  </div>
                  <div className="price-total">
                    <span className="price-tab price-total__text">Total</span>
                    $<span className="price-tab price-total__value" />
                  </div>
                </div>
                <div className="divider" />
                <button
                  className="button btn_submit--cart"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Add cart
                </button>
                <button className="button btn_submit--checkout">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
