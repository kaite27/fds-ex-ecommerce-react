import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

export default class CartItem extends Component {
  state = {
    inputValue: this.props.selectedQtt,
    inputChecked: this.props.inputChecked,
    loading: false,
    modalShow: false,
  };

  handleModalClose = () => {
    this.setState({ modalShow: false });
  };

  handleModalOpen = () => {
    this.setState({ modalShow: true });
  };

  handleChange = async e => {
    e.preventDefault();
    const { updateSelectedQtt, id } = this.props;
    this.setState({
      inputValue: e.target.value,
    });
    await updateSelectedQtt(e.target.value, id);
  };

  handleInput = e => {
    this.setState({
      inputChecked: this.state.inputChecked ? false : true,
    });
  };

  handleDeleteItem = e => {
    e.preventDefault();

    this.handleModalOpen();
    setTimeout(async () => {
      const { deleteCartItem, id } = this.props;
      await deleteCartItem(id);
    }, 2000);
  };

  render() {
    const {
      productId,
      productMarketPrice, // product salse price
      productUnitPrice,
      color,
      size,
      selectedQtt,
      availableQtt,
      productDesc,
      productTitle,
      imageURL, // main photo of a product
    } = this.props;

    return (
      <React.Fragment>
        <div className="product-cart">
          <div className="product-checkbox">
            <input
              type="checkbox"
              onChange={e => this.handleInput()}
              checked={
                this.props.inputChecked && this.state.inputChecked
                  ? 'checked'
                  : false
              }
              className="product-checkbox-btn"
            />
          </div>
          <div className="product-image">
            <Link to={`/product/${productId}`}>
              <img
                className="product-cart-image"
                src={imageURL}
                alt={productTitle}
              />
            </Link>
          </div>
          <div className="product-details">
            <div className="product-title">{productTitle}</div>
            <div className="product-description">{productDesc}</div>
            <div className="attribute-color">{color}</div>
            <div className="attribute-size">{size}</div>
          </div>
          <div className="product-price__unit">{productUnitPrice}</div>
          <div className="product-price__market">{productMarketPrice}</div>
          <div className="product-quantity-box">
            <input
              className="product-quantity"
              type="number"
              defaultValue={selectedQtt}
              min="1"
              max={availableQtt}
              data-toggle="tooltip"
              title="No more!"
              onChange={this.handleChange}
            />
            <button type="submit" className="button is-small update-product">
              Update
            </button>
            <div className="attribute-max">{availableQtt}</div>
          </div>
          <div className="product-subtot">
            {selectedQtt * productMarketPrice}
          </div>
          <div className="product-removal">
            <button
              type="submit"
              className="button is-danger remove-product"
              data-toggle="modal"
              data-target=".bd-example-modal-sm"
              onClick={this.handleDeleteItem}
            >
              Remove
            </button>
            <Modal
              show={this.state.modalShow}
              onHide={this.handleModalClose}
              className="cart__modal-delete"
            >
              <Modal.Header closeButton>
                <Modal.Title>Item removed from cart!</Modal.Title>
              </Modal.Header>
            </Modal>
          </div>
          <div className="divider-white" />
        </div>
      </React.Fragment>
    );
  }
}
