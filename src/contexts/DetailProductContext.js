import React from 'react';

import mallAPI from '../mallAPI';

const { Provider, Consumer } = React.createContext();

class DetailProductProvider extends React.Component {
  // static defaultProps = {
  //   id: null, // 초기 id
  // };

  state = {
    // colors: [],
    // sizes: [],
    // product: [],
    productTitle: '',
    // avgRate: '',
    // cntRates: 0,
    loading: false,
  };

  // reviews = [];
  async componentDidMount() {
    // const { id } = this.props;
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(
        `/attributes?productId=2&defaultAttr=true&_expand=product`
      );
      // const reviewRes = await mallAPI.get('/reviews?productId=2');
      const attrRes = await mallAPI.get(`/attributes?productId=2`);
      this.setState({
        productTitle: res.data.productTitle,
        // colors: attrRes.data.map(p => p.color),
        // sizes: attrRes.data.map(p => p.size),
        // product: res.data.map(p => ({
        // productTitle: p.productTitle,
        // productDesc: p.productDesc,
        // imageURL: p.imageURL,
        // category: p.category,
        // color: p.color,
        // size: p.size,
        // quantity: p.quantity,
        // attrSKU: p.attrSKU,
        // productMarketPrice: p.productMarketPrice,
        // productUnitPrice: p.productUnitPrice,
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const value = {
      productTitle: this.state.productTitle,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { DetailProductProvider, Consumer as DetailProductConsumer };
