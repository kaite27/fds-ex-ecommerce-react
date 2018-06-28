import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import DetailProductCT from '../containers/DetailProductCT';

export default class DetailPage extends Component {
  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <NavBarCT />
        <DetailProductCT id={match.params.id} />
      </React.Fragment>
    );
  }
}
