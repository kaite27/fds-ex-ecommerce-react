import React, { Component } from 'react';
import CartItem from './CartItem';

import { Button } from 'react-bootstrap';

export default class CartList extends Component {
  state = {
    inputChecked: true,
  };

  handleCheck = e => {
    this.setState({
      inputChecked: this.state.inputChecked ? false : true,
    });
  };

  handleCheckout = e => {
    alert('Checkout available soon!');
  };

  render() {
    const {
      carts = [],
      subTotal = 0.0,
      salesTax = 0.0,
      total = 0.0,
      deleteCartItem = () => {},
      updateSelectedQtt = () => {},
    } = this.props;

    return (
      <React.Fragment>
        <section className="cart-page">
          <div className="rows">
            <p className="title is-2">My Shopping Cart List</p>
          </div>
          <div className="rows clearfix">
            <button
              onClick={e => this.handleCheckout()}
              className={
                localStorage.getItem('cartItem')
                  ? 'button is-success checkout'
                  : 'button is-success checkout is-static'
              }
            >
              Checkout
            </button>
          </div>
          <div className="rows">
            <div className="cart-page__item clearfix">
              <div className="column-labels">
                <label className="product-checkbox">
                  <input
                    type="checkbox"
                    className="product-checkbox-btn"
                    defaultChecked
                    onClick={e => this.handleCheck()}
                  />
                </label>
                <label className="product-image">Image</label>
                <label className="product-details">Product</label>
                <label className="product-price__market">Original</label>
                <label className="product-price__unit">Sales</label>
                <label className="product-quantity-box">Quantity</label>
                <label className="product-subtot">Subtotal</label>
                <label className="product-removal">Remove</label>
              </div>
              <React.Fragment>
                {!localStorage.getItem('token') ? (
                  <div className="cart__login-required clearfix">
                    <p className="cart__text">Login is required!</p>
                    <div className="cart__div-divied">
                      <p>First visit? Sign in today!</p>
                      <Button href="/login" bsStyle="primary">
                        Sign In
                      </Button>
                    </div>
                    <div className="cart__div-divied">
                      <p>Welcome back! Log in now!</p>
                      <Button href="/login" bsStyle="success">
                        Log in
                      </Button>
                    </div>
                  </div>
                ) : localStorage.getItem('cartItem') > 0 ? (
                  carts.map(cart => (
                    <CartItem
                      inputChecked={this.state.inputChecked}
                      deleteCartItem={deleteCartItem}
                      updateSelectedQtt={updateSelectedQtt}
                      key={cart.id}
                      {...cart}
                    />
                  ))
                ) : (
                  <div className="cart__login-required">
                    <p className="cart__item-none">No item on your cart!</p>
                    <Button href="/product" bsStyle="primary">
                      Browse products
                    </Button>
                  </div>
                )}
              </React.Fragment>
              <div className="totals">
                <div className="totals-item">
                  <label>Subtotal</label>
                  <div className="totals-value" id="cart-subtotal">
                    {subTotal}
                  </div>
                </div>
                <div className="totals-item">
                  <label>Tax (6.625%)</label>
                  <div className="totals-value" id="cart-tax">
                    {salesTax}
                  </div>
                </div>
                <div className="totals-item totals-item-total">
                  <label>Grand Total</label>
                  <div className="totals-value" id="cart-total">
                    {total}
                  </div>
                </div>
              </div>
              <button
                onClick={e => this.handleCheckout()}
                className={
                  localStorage.getItem('cartItem')
                    ? 'button is-success checkout'
                    : 'button is-success checkout is-static'
                }
              >
                Checkout
              </button>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
