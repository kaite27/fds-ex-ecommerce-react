import React from 'react';
import { Link } from 'react-router-dom';

export default function CartItem({
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
}) {
  return (
    <React.Fragment>
      <div className="product-cart">
        <div className="product-checkbox">
          <input type="checkbox" className="product-checkbox-btn" />
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
          />
          <button type="submit" className="button is-small update-product">
            Update
          </button>
          <div className="attribute-max">{availableQtt}</div>
        </div>
        <div className="product-subtot">{selectedQtt * productMarketPrice}</div>
        <div className="product-removal">
          <button
            type="submit"
            className="button is-danger remove-product"
            data-toggle="modal"
            data-target=".bd-example-modal-sm"
          >
            Remove
          </button>
          {/* ----- modal ----- */}
          <div
            className="modal fade bd-example-modal-sm"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-sm">
              <div className="modal-content">
                <div className="modal-header modal-header-2">
                  <p className="modal-title" id="exampleModalLabel">
                    Item has deleted!
                  </p>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ----- modal ----- */}
        </div>
        <div className="divider-white" />
      </div>
    </React.Fragment>
  );
}
