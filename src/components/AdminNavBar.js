import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                <Link
                  className="list-group-item list-group-item-action admin-menu"
                  to="/admin"
                >
                  PRODUCTS
                </Link>
                <Link
                  className="list-group-item list-group-item-action admin-menu"
                  to="/admin"
                >
                  ADD PRODUCT
                </Link>
                <Link
                  className="list-group-item list-group-item-action admin-menu"
                  to="/admin"
                >
                  ORDERS
                </Link>
                <Link
                  className="list-group-item list-group-item-action admin-menu"
                  to="/admin"
                >
                  SALES
                </Link>
                <Link
                  className="list-group-item list-group-item-action admin-menu"
                  to="/admin"
                >
                  USERS
                </Link>
                <Link
                  className="list-group-item list-group-item-action admin-menu"
                  to="/admin"
                >
                  SETTING
                </Link>
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
