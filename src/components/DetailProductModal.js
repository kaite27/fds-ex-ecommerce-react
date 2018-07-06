import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class DetailProductModal extends Component {
  state = {
    modalOpen: true,
  };

  handleClose = e => {
    this.setState({ modalOpen: false });
  };

  render() {
    const {
      productTitle,
      productMarketPrice,
      color,
      size,
      inputValue,
      imageURL,
    } = this.props;

    return (
      <div className="static-modal">
        <Modal onHide={this.handleClose} show={this.state.modalOpen}>
          <Modal.Body>You just added ..</Modal.Body>
          <div class="modal-body">
            <div className="columns">
              <div className="column is-4">
                <div className="modal-image-box">
                  <img
                    src={imageURL}
                    className="modal-img"
                    alt="productTitle"
                  />
                </div>
              </div>
              <div className="column is-7 modal-info-box">
                <div className="modal-info">
                  <p className="modal-title-item">{productTitle}</p>
                  <p className="modal-price">{productMarketPrice}</p>
                  <p className="modal-color">{color}</p>
                  <p className="modal-size">{size}</p>
                  <p className="modal-quantity">{inputValue}</p>
                </div>
              </div>
            </div>
          </div>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button href="/my-cart" bsStyle="primary">
              View Cart
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
