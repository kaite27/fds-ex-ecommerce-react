import React from 'react';

import mallAPI from '../mallAPI';

const { Provider, Consumer } = React.createContext();

class CartProvider extends React.Component {
  state = {
    carts: [],
    loading: false,
    subTotal: 0,
    salesTax: 0,
    total: 0,
  };

  async componentDidMount() {
    await this.loadCartItem();
  }

  loadCartItem = async () => {
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(`/carts`);
      this.setState({
        carts: res.data.map(c => ({
          id: c.id,
          productId: c.productId,
          attributeId: c.attributeId,
          productTitle: c.productTitle,
          productDesc: c.productDesc,
          size: c.size,
          color: c.color,
          availableQtt: c.availableQtt,
          selectedQtt: c.selectedQtt,
          productUnitPrice: c.productUnitPrice,
          productMarketPrice: c.productMarketPrice,
          imageURL: c.imageURL,
        })),
      });
    } finally {
      this.priceCalculate();
      this.setState({ loading: false });
    }
  };

  deleteCartItem = async id => {
    this.setState({
      loading: true,
      carts: this.state.carts.filter(t => t.id !== id),
    });
    try {
      await mallAPI.delete(`/carts?id=${id}`);
    } finally {
      await this.loadCartItem();
      this.setState({ loading: false });
    }
  };

  priceCalculate = () => {
    const subTotal = this.state.carts
      .map(c => c.productMarketPrice * c.selectedQtt)
      .reduce((acc, item) => acc + item, 0);
    const salesTax = subTotal * 0.06625;
    const total = subTotal + salesTax;
    this.setState({
      subTotal: subTotal.toFixed(2),
      salesTax: salesTax.toFixed(2),
      total: total.toFixed(2),
    });
  };

  updateSelectedQtt = async (quantity, id) => {
    this.setState({
      loading: true,
    });
    try {
      const payload = {
        selectedQtt: quantity,
      };
      await mallAPI.patch(`/carts/${id}`, payload);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const value = {
      ...this.state,
      onDeleteCartItem: this.deleteCartItem,
      onpriceCalculate: this.priceCalculate,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { CartProvider, Consumer as CartConsumer };
