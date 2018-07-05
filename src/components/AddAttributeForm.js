import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import mallAPI from '../mallAPI';

export default class AddAttributeForm extends Component {
  state = {
    attCount: 1,
    attributes: [
      {
        attrSKU: '',
        color: '',
        size: '',
        productUnitPrice: '',
        productMarketPrice: '',
        quantity: '',
      },
    ],
    loading: false,
    published: false,
  };

  handleAttributeChangeAttrSKU = idx => evt => {
    const newattributes = this.state.attributes.map((attribute, sidx) => {
      if (idx !== sidx) return attribute;
      return { ...attribute, attrSKU: evt.target.value };
    });
    this.setState({ attributes: newattributes });
  };

  handleAttributeChangeColor = idx => evt => {
    const newattributes = this.state.attributes.map((attribute, sidx) => {
      if (idx !== sidx) return attribute;
      return { ...attribute, color: evt.target.value };
    });
    this.setState({ attributes: newattributes });
  };

  handleAttributeChangeSize = idx => evt => {
    const newattributes = this.state.attributes.map((attribute, sidx) => {
      if (idx !== sidx) return attribute;
      return { ...attribute, size: evt.target.value };
    });
    this.setState({ attributes: newattributes });
  };

  handleAttributeChangeMPrice = idx => evt => {
    const newattributes = this.state.attributes.map((attribute, sidx) => {
      if (idx !== sidx) return attribute;
      return { ...attribute, productMarketPrice: evt.target.value };
    });
    this.setState({ attributes: newattributes });
  };

  handleAttributeChangeUPrice = idx => evt => {
    const newattributes = this.state.attributes.map((attribute, sidx) => {
      if (idx !== sidx) return attribute;
      return { ...attribute, productUnitPrice: evt.target.value };
    });
    this.setState({ attributes: newattributes });
  };

  handleAttributeChangeQuantity = idx => evt => {
    const newattributes = this.state.attributes.map((attribute, sidx) => {
      if (idx !== sidx) return attribute;
      return { ...attribute, quantity: evt.target.value };
    });
    this.setState({ attributes: newattributes });
  };

  handleAddAttribute = () => {
    this.setState({
      attributes: this.state.attributes.concat([
        {
          attrSKU: '',
          color: '',
          size: '',
          productUnitPrice: '',
          productMarketPrice: '',
          quantity: '',
        },
      ]),
      attCount: this.state.attCount + 1,
    });
  };

  handleRemoveAttribute = idx => () => {
    this.setState({
      attributes: this.state.attributes.filter((s, sidx) => idx !== sidx),
      attCount: this.state.attCount - 1,
    });
  };

  handlePostAttribute = async e => {
    e.preventDefault();
    this.setState({ loading: true, published: true });
    const res = await mallAPI.get('/products?_sort=id&_order=desc&_limit=1');
    const productId = res.data.map(p => p.id);
    for (let i = 0; i < this.state.attCount; i++) {
      let a = 'false';
      if (i === 0) {
        a = 'true';
      }
      const payload = {
        attrSKU: this.state.attributes[i].attrSKU,
        color: this.state.attributes[i].color,
        size: this.state.attributes[i].size,
        productMarketPrice: parseFloat(
          this.state.attributes[i].productMarketPrice,
          2
        ),
        productUnitPrice: parseFloat(
          this.state.attributes[i].productUnitPrice,
          2
        ),
        quantity: parseInt(this.state.attributes[i].quantity, 10),
        productId: parseInt(productId, 10),
        defaultAttr: a,
      };
      await mallAPI.post('/attributes', payload);
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <div className="add-variants">
        <p className="add-subtitle title is-3">Product Variants</p>
        <form
          className="form-add-product__send"
          onSubmit={this.handlePostAttribute}
        >
          <div className="form-container">
            <div className="column-labels attr-labels">
              <label className="attr-sku">SKU #</label>
              <label className="attr-color">Color</label>
              <label className="attr-size">Size</label>
              <label className="attr-unit-price">Unit Price</label>
              <label className="attr-market-price">Market Price</label>
              <label className="attr-quantity">Quantity</label>
            </div>
            {this.state.attributes.map((attribute, idx) => (
              <div className="product product-attr">
                <div className=" attr-sku">
                  <input
                    type="text"
                    value={attribute.attrSKU}
                    onChange={this.handleAttributeChangeAttrSKU(idx)}
                    className="input attr-input attr-sku__input"
                    placeholder="SKU number"
                    disabled={this.state.published ? true : false}
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) SKU-22a-0211"
                  />
                </div>
                <div className=" attr-color">
                  <input
                    type="text"
                    value={attribute.color}
                    onChange={this.handleAttributeChangeColor(idx)}
                    className="input attr-input  attr-sku__color"
                    placeholder="One of colours"
                    disabled={this.state.published ? true : false}
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) Red, Yellow .."
                  />
                </div>
                <div className=" attr-size">
                  <input
                    type="text"
                    value={attribute.size}
                    onChange={this.handleAttributeChangeSize(idx)}
                    className="input attr-input  attr-sku__size"
                    placeholder="One of sizes"
                    disabled={this.state.published ? true : false}
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) 90, Small, US-1 .."
                  />
                </div>
                <div className=" attr-unit-price">
                  <input
                    type="number"
                    value={attribute.productUnitPrice}
                    onChange={this.handleAttributeChangeUPrice(idx)}
                    className="input attr-input  attr-sku__unit-price"
                    placeholder="Unit price"
                    step="0.01"
                    data-number-to-fixed="2"
                    disabled={this.state.published ? true : false}
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="important! only number available! ex) 90.99"
                  />
                </div>
                <div className=" attr-market-price">
                  <input
                    type="number"
                    value={attribute.productMarketPrice}
                    onChange={this.handleAttributeChangeMPrice(idx)}
                    className="input attr-input  attr-sku__market-price"
                    placeholder="Market price"
                    required
                    disabled={this.state.published ? true : false}
                    step="0.01"
                    data-number-to-fixed="2"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="important! only number available! ex) 90.99"
                  />
                </div>
                <div className=" attr-quantity">
                  <input
                    type="number"
                    value={attribute.quantity}
                    onChange={this.handleAttributeChangeQuantity(idx)}
                    className="input attr-input  attr-sku__quantity"
                    placeholder="Quantity"
                    disabled={this.state.published ? true : false}
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) 100, 30"
                  />
                </div>
                <button
                  type="button"
                  onClick={this.handleRemoveAttribute(idx)}
                  className={
                    this.state.attCount <= 1
                      ? 'button is-danger delete-circle is-static'
                      : this.state.published
                        ? 'button is-danger delete-circle is-static'
                        : 'button is-danger delete-circle'
                  }
                >
                  -
                </button>
              </div>
            ))}
            <div className="row-buttons">
              <div className="field is-grouped">
                <div className="control">
                  <button
                    type="button"
                    onClick={this.handleAddAttribute}
                    className={
                      this.state.loading
                        ? 'button is-info add-reset-btn is-loading'
                        : 'button is-info add-reset-btn'
                    }
                  >
                    + Add more variant
                  </button>
                </div>
                <div className="control">
                  <button
                    type="submit"
                    className={
                      this.state.loading
                        ? 'button is-success add-reset-btn is-loading'
                        : 'button is-success add-reset-btn'
                    }
                  >
                    Publish product
                  </button>
                  <Modal
                    show={
                      this.state.published && !this.state.loading ? true : false
                    }
                    className="admin-add-product-modal"
                  >
                    <Modal.Header>
                      <Modal.Title>
                        Attribute(s) is(are) successfully published!{' '}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                      <Button href="/product" bsStyle="success">
                        View Product Page
                      </Button>
                      <Button href="/admin" bsStyle="primary">
                        Add New Product
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
