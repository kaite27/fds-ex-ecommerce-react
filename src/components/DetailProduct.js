import React, { Component } from 'react';

import DetailProductBreadcrumb from './DetailProductBreadcrumb';

export default class DetailProduct extends Component {
  state = {
    inputValue: 1,
  };

  colorRef = React.createRef();
  sizeRef = React.createRef();

  handleChange = e => {
    e.preventDefault();
    const { onPriceCalculate } = this.props;
    this.setState({
      inputValue: e.target.value,
    });
    onPriceCalculate(e.target.value);
  };

  handleColorChange = e => {
    e.preventDefault();
    const { onUpdateColor } = this.props;
    onUpdateColor(this.colorRef.current.value);
    this.setState({ inputValue: 1 });
  };

  handleSizeChange = e => {
    e.preventDefault();
    const { onUpdateSize } = this.props;
    onUpdateSize(this.sizeRef.current.value);
    this.setState({ inputValue: 1 });
  };

  render() {
    const {
      colors,
      sizes,
      productId,
      productTitle,
      productDesc,
      imageURL,
      category,
      color,
      size,
      quantity,
      attrSKU,
      productMarketPrice,
      productUnitPrice,
      subTotal,
      total,
      salesTax,
    } = this.props;

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
                  {productMarketPrice > 0 ? productMarketPrice : 'Sold Out'}
                </span>
                <form method="POST">
                  <div className="field">
                    <div className="control">
                      <span className="list-group-item__variants">
                        Colors :
                      </span>
                      <div className="select is-success">
                        <select
                          onChange={this.handleColorChange}
                          className="option-list attribute-list-color"
                          name="color"
                          id="color"
                          ref={this.colorRef}
                        >
                          {/* <!-- 삽입! --> */}
                          {colors.map(
                            item =>
                              item === color[0] ? (
                                <option
                                  key={item}
                                  selected={'true'}
                                  value={item}
                                >
                                  {item}
                                </option>
                              ) : (
                                <option key={item} value={item}>
                                  {item}
                                </option>
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
                          onChange={this.handleSizeChange}
                          className="option-list attribute-list-size"
                          name="size"
                          id="size"
                          ref={this.sizeRef}
                        >
                          {/* <!-- 삽입! --> */}
                          {sizes.map(
                            item =>
                              item === size[0] ? (
                                <option
                                  key={item}
                                  selected={'true'}
                                  value={item}
                                >
                                  {item}
                                </option>
                              ) : (
                                <option key={item} value={item}>
                                  {item}
                                </option>
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
                          onChange={this.handleChange}
                          type="number"
                          name="quantity"
                          className="input option-quantity"
                          disabled={quantity > 0 ? null : 'disabled'}
                          min="1"
                          max={quantity}
                          value={this.state.inputValue}
                          data-toggle="tooltip"
                          title="No more!"
                          defaultValue="1"
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
                      $<span className="price-tab price-subtotal__value">
                        {subTotal}
                      </span>
                    </div>
                    <div className="price-tax">
                      <span className="price-tab price-tax__text">
                        Salse Tax <span>(6.625%)</span>
                      </span>
                      $<span className="price-tab price-tax__value">
                        {salesTax}
                      </span>
                    </div>
                    <div className="price-total">
                      <span className="price-tab price-total__text">Total</span>
                      $<span className="price-tab price-total__value">
                        {total}
                      </span>{' '}
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
}
