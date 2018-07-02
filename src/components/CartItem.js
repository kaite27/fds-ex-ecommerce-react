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
      <div class="product-cart">
        <div class="product-checkbox">
          <input type="checkbox" class="product-checkbox-btn" />
        </div>
        <div class="product-image">
          <Link to={`/product/${productId}`}>
            <img class="product-cart-image" src={imageURL} alt={productTitle} />
          </Link>
        </div>
        <div class="product-details">
          <div class="product-title">{productTitle}</div>
          <div class="product-description">{productDesc}</div>
          <div class="attribute-color">{color}</div>
          <div class="attribute-size">{size}</div>
        </div>
        <div class="product-price__unit">{productUnitPrice}</div>
        <div class="product-price__market">{productMarketPrice}</div>
        <div class="product-quantity-box">
          <input
            class="product-quantity"
            type="number"
            defaultValue={selectedQtt}
            min="1"
            max={availableQtt}
            data-toggle="tooltip"
            title="No more!"
          />
          <button type="submit" class="button is-small update-product">
            Update
          </button>
          <div class="attribute-max">{availableQtt}</div>
        </div>
        <div class="product-subtot">{selectedQtt * productMarketPrice}</div>
        <div class="product-removal">
          <button
            type="submit"
            class="button is-danger remove-product"
            data-toggle="modal"
            data-target=".bd-example-modal-sm"
          >
            Remove
          </button>
          {/* ----- modal ----- */}
          <div
            class="modal fade bd-example-modal-sm"
            tabindex="-1"
            role="dialog"
            aria-labelledby="mySmallModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-sm">
              <div class="modal-content">
                <div class="modal-header modal-header-2">
                  <p class="modal-title" id="exampleModalLabel">
                    Item has deleted!
                  </p>
                  <button
                    type="button"
                    class="close"
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
        <div class="divider-white" />
      </div>
    </React.Fragment>
  );
}
