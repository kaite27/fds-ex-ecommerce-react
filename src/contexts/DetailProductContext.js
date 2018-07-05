import React from 'react';

import mallAPI from '../mallAPI';

const { Provider, Consumer } = React.createContext();

class DetailProductProvider extends React.Component {
  state = {
    colors: [],
    sizes: [],
    attributeId: 0,
    productId: '',
    productTitle: '',
    productDesc: '',
    imageURL: '',
    category: '',
    color: '',
    size: 0,
    quantity: 0,
    attrSKU: '',
    productMarketPrice: 0,
    productUnitPrice: 0,
    // avgRate: '',
    // cntRates: 0,
    loading: false,
    prices: [],
    subTotal: 0,
    total: 0,
    salesTax: 0,
  };

  // reviews = [];
  async componentDidMount() {
    await this.loadProduct();
  }

  loadProduct = async e => {
    const { id } = this.props;
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(
        `/attributes?productId=${id}&defaultAttr=true&_expand=product`
      );
      // product attribute get 요청
      const attrRes = await mallAPI.get(`/attributes?productId=${id}`);

      // 컬러와 사이즈 중복 값 제거
      const avoidColor = attrRes.data
        .map(p => p.color)
        .filter(function(item, i, arr) {
          return i === arr.indexOf(item);
        });

      const avoidSize = attrRes.data
        .map(p => p.size)
        .filter(function(item, i, arr) {
          return i === arr.indexOf(item);
        })
        .sort((prev, current) => prev - current);

      this.setState({
        colors: avoidColor,
        sizes: avoidSize,
        productId: res.data.map(p => p.productId),
        productTitle: res.data.map(p => p.product.productTitle),
        productDesc: res.data.map(p => p.product.productDesc),
        imageURL: res.data.map(p => p.product.imageURL),
        category: res.data.map(p => p.product.category),
        attributeId: res.data.map(p => p.id),
        color: res.data.map(p => p.color),
        size: res.data.map(p => p.size),
        quantity: res.data.map(p => p.quantity),
        attrSKU: res.data.map(p => p.attrSKU),
        productMarketPrice: res.data.map(p => p.productMarketPrice),
        productUnitPrice: res.data.map(p => p.productUnitPrice),
        subTotal: res.data.map(p => p.productMarketPrice),
        total: (
          0.06625 *
          (res.data.map(p => p.productMarketPrice) + 1)
        ).toFixed(2),
        salesTax: (res.data.map(p => p.productMarketPrice) * 0.06625).toFixed(
          2
        ),
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  updateColor = async color => {
    const { id } = this.props;
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(
        `/attributes?productId=${id}&color=${color}&size=${this.state.size}`
      );
      this.setState({
        color: color,
        quantity: res.data.map(p => (p.quantity ? p.quantity : 0)),
        attrSKU: res.data.map(p => p.attrSKU),
        attributeId: res.data.map(p => p.id),
        productMarketPrice: res.data.map(p => p.productMarketPrice),
        productUnitPrice: res.data.map(p => p.productUnitPrice),
      });
      this.priceCalculate(1);
    } finally {
      this.setState({ loading: false });
    }
  };

  updateSize = async size => {
    const { id } = this.props;
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(
        `/attributes?productId=${id}&size=${size}&color=${this.state.color}`
      );
      this.setState({
        size: size,
        quantity: res.data.map(p => (p.quantity ? p.quantity : 0)),
        attrSKU: res.data.map(p => p.attrSKU),
        attributeId: res.data.map(p => p.id),
        productMarketPrice: res.data.map(p => p.productMarketPrice),
        productUnitPrice: res.data.map(p => p.productUnitPrice),
      });
      this.priceCalculate(1);
    } finally {
      this.setState({ loading: false });
    }
  };

  priceCalculate = inputValue => {
    const subTotal = this.state.productMarketPrice * parseInt(inputValue, 10);
    const salesTax = subTotal * 0.06625;
    const total = subTotal + salesTax;
    this.setState({
      subTotal: subTotal.toFixed(2),
      salesTax: salesTax.toFixed(2),
      total: total.toFixed(2),
    });
  };

  addCart = async inputValue => {
    this.setState({ loading: true });
    let duplicateAttr = false;
    let result = false;
    const payload = {
      userId: 1,
      productId: parseInt(this.state.productId, 10),
      attributeId: parseInt(this.state.attributeId, 10),
      productTitle: this.state.productTitle + '',
      productDesc: this.state.productDesc + '',
      size: this.state.size,
      color: this.state.color + '',
      availableQtt: parseInt(this.state.quantity, 10),
      selectedQtt: parseInt(inputValue, 10),
      productMarketPrice: parseFloat(this.state.productMarketPrice, 2),
      productUnitPrice: parseFloat(this.state.productUnitPrice, 2),
      imageURL: this.state.imageURL + '',
    };
    const res = await mallAPI.get('/carts');
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].attributeId === parseInt(this.state.attributeId, 10)) {
        duplicateAttr = true;
        result = true;
      } else {
        duplicateAttr = false;
      }
    }
    console.log(`duplicate? ${result}`);
    if (result) {
      alert('already in cart!!');
    } else {
      await mallAPI.post('/carts', payload);
      localStorage.setItem(
        'cartItem',
        parseInt(localStorage.getItem('cartItem'), 10) + 1
      );
    }
    this.setState({ loading: false });
  };

  render() {
    const value = {
      ...this.state,
      onUpdateSize: this.updateSize,
      onUpdateColor: this.updateColor,
      onPriceCalculate: this.priceCalculate,
      onAddCart: this.addCart,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { DetailProductProvider, Consumer as DetailProductConsumer };
