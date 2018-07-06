import React, { Component } from 'react';
import mallAPI from '../mallAPI';

import AddAttributeForm from './AddAttributeForm';

export default class AddProductForm extends Component {
  state = {
    productTitle: '',
    productDesc: '',
    category: '',
    imageURL: '',
    published: false,
    loading: false,
  };

  categoryRef = React.createRef();

  handleStateChange = e => {
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  handleCategoryChange = e => {
    e.preventDefault();
    this.setState({ category: this.categoryRef.current.value });
  };

  handlePostProduct = async e => {
    e.preventDefault();
    const payload = {
      productTitle: this.state.productTitle,
      productDesc: this.state.productDesc,
      imageURL: this.state.imageURL,
      category: this.state.category,
      productUnitPrice: this.state.productUnitPrice,
      productMarketPrice: this.state.productMarketPrice,
      accSoldCnt: 0,
    };
    try {
      this.setState({ loading: true });
      await mallAPI.post('/products', payload);
    } finally {
      this.setState({ published: true });
    }
  };

  handleUnpublish = e => {
    e.preventDefault();
    alert('This function will be comming soon!');
  };
  
  render() {
    return (
      <React.Fragment>
        <div className="form-add-product">
          <form
            className="form-add-product__send"
            onSubmit={this.handlePostProduct}
          >
            <div className="row-title">
              <p className="add-subtitle title is-3">Products Info</p>
              <div className="field">
                <label className="label">Product Title</label>
                <div className="control">
                  <input
                    name="productTitle"
                    onChange={this.handleStateChange}
                    disabled={this.state.loading ? true : false}
                    className="input add-title"
                    type="text"
                    placeholder="Type title of this product"
                    required
                    maxLength="50"
                  />
                </div>
                <label className="label">Product Description</label>
                <div className="control">
                  <textarea
                    name="productDesc"
                    onChange={this.handleStateChange}
                    disabled={this.state.loading ? true : false}
                    placeholder="Type description of this product"
                    className="textarea add-desc"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="row-category">
              <p className="add-subtitle title is-3">Product Category</p>
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  <select
                    className="add-category-options"
                    onChange={this.handleCategoryChange}
                    ref={this.categoryRef}
                    disabled={this.state.loading ? true : false}
                  >
                    <option className="add-category-option">Dress</option>
                    <option className="add-category-option">Shoes</option>
                    <option className="add-category-option">Coat</option>
                    <option className="add-category-option">Bags</option>
                    <option className="add-category-option">Shirt</option>
                    <option className="add-category-option">Accessories</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="row-images">
              <p className="add-subtitle title is-3">Product Images</p>
              <div className="file">
                <label className="add-image-label label">Product Image</label>
                <div className="control">
                  <input
                    name="imageURL"
                    onChange={this.handleStateChange}
                    className="input add-image"
                    disabled={this.state.loading ? true : false}
                    type="text"
                    placeholder="https://..."
                    required
                  />
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="row-buttons">
              <div className="field is-grouped">
                <div className="control">
                  <button
                    type="submit"
                    className={
                      this.state.published
                        ? 'button is-info add-reset-btn is-static'
                        : 'button is-info add-reset-btn'
                    }
                  >
                    Add Attribute(s)
                  </button>
                </div>
                <div className="control">
                  <button
                    type="button"
                    onClick={this.handleUnpublish}
                    className={
                      this.state.published
                        ? 'button is-danger add-reset-btn'
                        : 'button is-danger add-reset-btn is-static'
                    }
                  >
                    Edit Product Info
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {this.state.published ? <AddAttributeForm /> : null}
      </React.Fragment>
    );
  }
}
