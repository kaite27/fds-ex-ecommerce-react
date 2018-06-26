import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import DetailProductCT from '../containers/DetailProductCT';

export default class DetailPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <DetailProductCT />
      </React.Fragment>
    );
  }
}
