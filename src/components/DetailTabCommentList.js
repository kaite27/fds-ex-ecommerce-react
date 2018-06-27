import React, { Component } from 'react';

import DatailTabCommentForm from './DetailTabCommentForm';
import DetailTabCommentItem from './DetailTabCommentItem';

export default class DetailTabCommentList extends Component {
  render() {
    return (
      <div className="product-review-box">
        <DatailTabCommentForm />
        <div className="column-labels attr-labels review-labels">
          <label className="review-date-box">DATE</label>
          <label className="review-reviewer-box">NAME</label>
          <label className="review-rate-box">RATING</label>
          <label className="review-body-box">COMMENT</label>
          <label className="review-btn-box">ACTION</label>
        </div>
        <DetailTabCommentItem />
      </div>
    );
  }
}
