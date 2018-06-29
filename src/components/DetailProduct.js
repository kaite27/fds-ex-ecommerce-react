import React from 'react';

import DetailProductBreadcrumb from './DetailProductBreadcrumb';

export default function DetailProduct({
  colors = [],
  sizes = [],
  productId,
  productTitle = '',
  productDesc,
  imageURL,
  category,
  color,
  size,
  quantity,
  attrSKU,
  productMarketPrice,
  productUnitPrice,
}) {
  return (
    <React.Fragment>
      <DetailProductBreadcrumb productId={productId} category={category} />
      <div className="rows">
        <div className="columns">
          <div className="column is-one-third">
            <div className="img-box-big">
              <img
                className="product-page__img--main-big"
                src={imageURL}
                alt={productTitle}
              />
              <div className="img-container">
                <img
                  className="img-container__list img-list-1"
                  src="https://image.freepik.com/free-photo/flowers-near-hat-and-dress_23-2147801034.jpg"
                  alt={productTitle}
                />
                <img
                  className="img-container__list img-list-2"
                  src="https://image.freepik.com/free-photo/stunning-lady-in-pink-dress-poses-in-rays-of-morning-sun-on-the_1304-4767.jpg"
                  alt={productTitle}
                />
                <img
                  className="img-container__list img-list-3"
                  src="https://image.freepik.com/free-photo/bride-dancing-in-front-of-building_1304-4133.jpg"
                  alt={productTitle}
                />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="product-info-box">
              <p className="product-detail-page__sku">{attrSKU}</p>
              <p className="product-detail-page__title">{productTitle}</p>
              <p className="product-detail-page__desc">{productDesc}</p>
              <span className="product-detail-page__uprice">
                {productUnitPrice}
              </span>
              <span className="product-detail-page__mprice">
                {productMarketPrice}
              </span>
              <form method="POST">
                <div className="field">
                  <div className="control">
                    <span className="list-group-item__variants">Colors :</span>
                    <div className="select is-success">
                      <select
                        className="option-list attribute-list-color"
                        name="color"
                        id="color"
                      >
                        {/* <!-- 삽입! --> */}
                        {colors.map(
                          item =>
                            item === color[0] ? (
                              <option seleted={'true'} value={item}>
                                {item}
                              </option>
                            ) : (
                              <option value={item}>{item}</option>
                            )
                        )}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <span className="list-group-item__variants">Size :</span>
                    <div className="select is-success">
                      <select
                        className="option-list attribute-list-size"
                        name="size"
                        id="size"
                      >
                        {/* <!-- 삽입! --> */}
                        {sizes.map(
                          item =>
                            item === size[0] ? (
                              <option selected={'true'} value={item}>
                                {item}
                              </option>
                            ) : (
                              <option value={item}>{item}</option>
                            )
                        )}
                      </select>
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
                        max={quantity}
                        value="1"
                        data-toggle="tooltip"
                        title="No more!"
                      />
                    </div>
                    <span className="option-quantity-remain-box">
                      {' '}
                      <span className="option-quantity-remain">
                        {quantity}
                      </span>{' '}
                      item(s) left
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
                      Salse Tax <span>(6.625%)</span>
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
