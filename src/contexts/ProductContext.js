import React from 'react';

import mallAPI from '../mallAPI';

const { Provider, Consumer } = React.createContext();

class ProductProvider extends React.Component {
  state = {
    products: [],
    category: '',
    loading: false,
  };

  async componentDidMount() {
    await this.loadProducts(this.state.category);
  }

  handleChangeCategory = async category => {
    this.setState({
      loading: true,
    });
    await this.loadProducts(category);
    this.setState({
      loading: false,
    });
  };

  loadProducts = async category => {
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(
        `/products?_embed=attributes&_sort=id&_order=desc&category_like=${category}`
      );
      const attrRes = await mallAPI.get(`/attributes`);

      const arr = res.data.map(p => ({
        id: p.id,
        title: p.productTitle,
        desc: p.productDesc,
        category: p.category,
        imageURL: p.imageURL,
        accSoldCnt: p.accSoldCnt,
        unitPrice: attrRes.data
          .map(a => {
            return a.defaultAttr === 'true' && a.productId === p.id
              ? a.productUnitPrice
              : null;
          })
          .filter(i => i !== null),
        marketPrice: attrRes.data
          .map(a => {
            return a.defaultAttr === 'true' && a.productId === p.id
              ? a.productMarketPrice
              : null;
          })
          .filter(i => i !== null),
        colors: attrRes.data
          .map(a => {
            return a.productId === p.id ? a.color : null;
          })
          .filter(i => i !== null)
          .filter(function(item, i, arr) {
            return i === arr.indexOf(item);
          }),
        sizes: attrRes.data
          .map(a => {
            return a.productId === p.id ? a.size : null;
          })
          .filter(i => i !== null)
          .filter(function(item, i, arr) {
            return i === arr.indexOf(item);
          }),
      }));
      this.setState({
        products: arr,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const value = {
      ...this.state,
      onCategory: this.handleChangeCategory,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { ProductProvider, Consumer as ProductConsumer };
