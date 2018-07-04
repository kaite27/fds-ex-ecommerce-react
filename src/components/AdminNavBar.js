import React, { Component } from 'react';

import AddProductList from './AddProductList';

export default class AdminNavBar extends Component {
  render() {
    return (
      <section id="admin-main-page">
        <div className="rows">
          <h2 className="title is-2 admin-title">Administrator Page</h2>
        </div>
        <div className="rows">
          <div className="columns">
            <div className="column is-3 admin-menus">
              <ul className="list-group">
                <li className="list-group-item list-group-item-action admin-menu admin-link-products">
                  <a href="#">PRODUCTS</a>
                </li>
                <li className="list-group-item list-group-item-action admin-menu admin-link-add">
                  <a href="#">ADD PRODUCT</a>
                </li>
                <li className="list-group-item list-group-item-action admin-menu admin-link-orders">
                  <a href="#">ORDERS</a>
                </li>
                <li className="list-group-item list-group-item-action admin-menu admin-link-sales">
                  <a href="#">SALES</a>
                </li>
                <li className="list-group-item list-group-item-action admin-menu admin-link-users">
                  <a href="#">USERS</a>
                </li>
                <li className="list-group-item list-group-item-action admin-menu admin-link-setting">
                  <a href="#">SETTING</a>
                </li>
                <li className="list-group-item list-group-item-action admin-menu admin-link-blink" />
              </ul>
            </div>
            <div className="column is-9">
              <AddProductList />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
