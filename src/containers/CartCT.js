import React from 'react';
import { Link } from 'react-router-dom';

import { CartProvider, CartConsumer } from '../contexts/CartContext';
import CartList from '../components/CartList';

export default class CartCT extends React.Component {
  render() {
    return (
      <CartProvider>
        <CartConsumer>
          {({ carts, total, salesTax, subTotal }) => (
            <CartList
              as={Link}
              total={total}
              salesTax={salesTax}
              subTotal={subTotal}
              carts={carts.map(c => ({
                linkProps: { to: `/product/${c.productId}` },
                ...c,
              }))}
            />
          )}
        </CartConsumer>
      </CartProvider>
    );
  }
}
