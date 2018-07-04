import React, { Component } from 'react';

export default class AddAttributeForm extends Component {
  state = {
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

  // submit
  handleSubmit = evt => {
    const { name, attributes } = this.state;
    alert(`Incorporated: ${name} with ${attributes.length} attributes`);
  };

  handleAddAttribute = () => {
    this.setState({
      attributes: this.state.attributes.concat([
        {
          attrSKU: '',
          color: '',
          size: 0,
          productUnitPrice: 0,
          productMarketPrice: 0,
          quantity: 0,
        },
      ]),
    });
  };

  handleRemoveAttribute = idx => () => {
    this.setState({
      attributes: this.state.attributes.filter((s, sidx) => idx !== sidx),
    });
  };

  render() {
    return (
      <div class="add-variants">
        <p class="add-subtitle title is-3">Product Variants</p>
        <form class="form-add-product__send">
          <div class="form-container">
            <div class="column-labels attr-labels">
              <label class="attr-sku">SKU #</label>
              <label class="attr-color">Color</label>
              <label class="attr-size">Size</label>
              <label class="attr-unit-price">Unit Price</label>
              <label class="attr-market-price">Market Price</label>
              <label class="attr-quantity">Quantity</label>
            </div>
            {this.state.attributes.map((attribute, idx) => (
              <div class="product product-attr">
                <div class=" attr-sku">
                  <input
                    type="text"
                    value={attribute.attrSKU}
                    onChange={this.handleAttributeChangeAttrSKU(idx)}
                    class="input attr-input attr-sku__input"
                    placeholder="SKU number"
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) SKU-22a-0211"
                  />
                </div>
                <div class=" attr-color">
                  <input
                    type="text"
                    value={attribute.color}
                    onChange={this.handleAttributeChangeColor(idx)}
                    class="input attr-input  attr-sku__color"
                    placeholder="One of colours"
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) Red, Yellow .."
                  />
                </div>
                <div class=" attr-size">
                  <input
                    type="text"
                    value={attribute.size}
                    onChange={this.handleAttributeChangeSize(idx)}
                    class="input attr-input  attr-sku__size"
                    placeholder="One of sizes"
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) 90, Small, US-1 .."
                  />
                </div>
                <div class=" attr-unit-price">
                  <input
                    type="number"
                    value={attribute.productUnitPrice}
                    onChange={this.handleAttributeChangeUPrice(idx)}
                    class="input attr-input  attr-sku__unit-price"
                    placeholder="Unit price"
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="important! only number available! ex) 90.99"
                  />
                </div>
                <div class=" attr-market-price">
                  <input
                    type="number"
                    value={attribute.productMarketPrice}
                    onChange={this.handleAttributeChangeMPrice(idx)}
                    class="input attr-input  attr-sku__market-price"
                    placeholder="Market price"
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="important! only number available! ex) 90.99"
                  />
                </div>
                <div class=" attr-quantity">
                  <input
                    type="number"
                    value={attribute.quantity}
                    onChange={this.handleAttributeChangeQuantity(idx)}
                    class="input attr-input  attr-sku__quantity"
                    placeholder="Quantity"
                    required
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="ex) 100, 30"
                  />
                </div>
                <button
                  onClick={this.handleRemoveAttribute(idx)}
                  className="button is-danger delete-circle"
                >
                  -
                </button>
              </div>
            ))}
            <div class="row-buttons">
              <div class="field is-grouped">
                <div class="control">
                  <button
                    type="button"
                    onClick={this.handleAddAttribute}
                    class="button is-info add-reset-btn"
                  >
                    + Add more variant
                  </button>
                </div>
                <div class="control">
                  <button type="button" class="button is-success add-reset-btn">
                    Publish product
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
