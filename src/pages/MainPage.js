import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import NewProductCT from '../containers/NewProductCT';
import FooterCT from '../containers/FooterCT';

export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <NewProductCT />
        <FooterCT />
      </React.Fragment>
    );
  }
}
