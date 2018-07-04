import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import AdminNavBar from '../components/AdminNavBar';

export default class AdminPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <AdminNavBar />
      </React.Fragment>
    );
  }
}
