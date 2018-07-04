import React, { Component } from 'react';

export default class LoadingBox extends Component {
  render() {
    return (
      <div className="root--loading">
        <div className="full-box">
          <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    );
  }
}
