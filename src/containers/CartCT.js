import React from 'react';
import { Link } from 'react-router-dom';

import { CartProvider, CartConsumer } from '../contexts/CartContext';
import CartList from '../components/CartList';

export default class CartCT extends React.Component {
  render() {
    return (
      <CartProvider>
        <CartConsumer>
          {({ carts }) => (
            <CartList
              as={Link}
              carts={carts.map(p => ({
                linkProps: { to: `/product/${p.productId}` },
                ...p,
              }))}
            />
          )}
        </CartConsumer>
      </CartProvider>
    );
  }
}
