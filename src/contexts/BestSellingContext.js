import React from 'react';

import mallAPI from '../mallAPI';

const { Provider, Consumer } = React.createContext();

class BestSellingProvider extends React.Component {
  state = {
    products: [],
    loading: false,
  };
  fetchBestSelling = async () => {
    const res = await mallAPI.get(
      '/attributes?defaultAttr=true&_expand=product'
    );
    const arr = res.data.map(p => ({
      id: p.product.id,
      title: p.product.productTitle,
      accSoldCnt: p.product.accSoldCnt,
      marketPrice: p.productMarketPrice,
      unitPrice: p.productUnitPrice,
      imageURL: p.product.imageURL,
    }));
    const bestProducts = arr.sort((prev, current) => {
      if (prev.accSoldCnt > current.accSoldCnt) {
        return -1;
      }
      if (prev.accSoldCnt < current.accSoldCnt) {
        return 1;
      }
      return 0;
    });

    bestProducts.length = 4;

    this.setState({
      products: bestProducts,
    });
  };
  async componentDidMount() {
    this.setState({ loading: true });
    this.fetchBestSelling();
    this.setState({ loading: false });
  }

  render() {
    const value = {
      products: this.state.products,
      loading: this.state.loading,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { BestSellingProvider, Consumer as BestSellingConsumer };
