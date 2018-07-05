import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import NewProductCT from '../containers/NewProductCT';
import FooterCT from '../containers/FooterCT';
import SubscribesCT from '../containers/SubscribesCT';
import BestSellingCT from '../containers/BestSellingCT';
export default class MainPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <NewProductCT />
        <SubscribesCT />
        <BestSellingCT />
        <FooterCT />
      </React.Fragment>
    );
  }
}
