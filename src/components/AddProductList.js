import React, { Component } from 'react';

import AddProductForm from './AddProductForm';


export default class AddProductList extends Component {
  render() {
    return (
      <section id="add-product-page">
        <div className="admin-add-product">
          <p className="title is-3">Add New Product</p>
          <p className="subtitle is-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <AddProductForm />
      </section>
    );
  }
}
