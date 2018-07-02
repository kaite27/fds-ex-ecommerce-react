import React from 'react';
import CartItem from './CartItem';

export default function CartList({
  carts = [],
  subTotal = 0.0,
  salesTax = 0.0,
  total = 0.0,
}) {
  return (
    <React.Fragment>
      <section className="cart-page">
        <div className="rows">
          <p className="title is-2">My Shopping Cart List</p>
        </div>
        <div className="rows clearfix">
          <button className="button is-success checkout is-static">
            Checkout
          </button>
        </div>
        <div className="rows">
          <div className="cart-page__item clearfix">
            <div className="column-labels">
              <label className="product-checkbox">Check</label>
              <label className="product-image">Image</label>
              <label className="product-details">Product</label>
              <label className="product-price__market">Original</label>
              <label className="product-price__unit">Sales</label>
              <label className="product-quantity-box">Quantity</label>
              <label className="product-subtot">Subtotal</label>
              <label className="product-removal">Remove</label>
            </div>
            {carts.map(cart => <CartItem key={cart.id} {...cart} />)}
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
            <button className="button is-success checkout checkout2 is-static">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
