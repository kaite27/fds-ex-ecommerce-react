import React from 'react';

import mallAPI from '../mallAPI';

const { Provider, Consumer } = React.createContext();

class NewProductProvider extends React.Component {
  state = {
    products: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(
        '/attributes?defaultAttr=true&_sort=productId&_order=desc&_limit=4&_expand=product'
      );
      this.setState({
        products: res.data.map(p => ({
          id: p.product.id,
          title: p.product.productTitle,
          marketPrice: p.productMarketPrice,
          unitPrice: p.productUnitPrice,
          imageURL: p.product.imageURL,
        })),
        loading: false,
      });

      // const res = await mallAPI.get('/attributes?_expand=product');
      // let arr = [];
      // arr = res.data
      //   .map(p => {
      //     return p.defaultAttr === 'true'
      //       ? {
      //           id: p.product.id,
      //           title: p.product.productTitle,
      //           marketPrice: p.productMarketPrice,
      //           unitPrice: p.productUnitPrice,
      //           imageURL: p.product.imageURL,
      //         }
      //       : null;
      //   })
      //   .filter(i => i !== null)
      //   .reverse();
      // arr.length = 4;
      // this.setState({
      //   products: arr,
      // });

      // this.setState({
      //   products: res.data
      //     .map(p => {
      //       return p.defaultAttr === 'true'
      //         ? {
      //             id: p.product.id,
      //             title: p.product.productTitle,
      //             marketPrice: p.productMarketPrice,
      //             unitPrice: p.productUnitPrice,
      //           }
      //         : null;
      //     })
      //     .filter(p => p !== null),
      // });
    } finally {
      // this.setState({  });
    }
  }

  render() {
    const value = {
      products: this.state.products,
      loading: this.state.loading,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { NewProductProvider, Consumer as NewProductConsumer };
