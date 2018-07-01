import React from 'react';

import DetailTabCommentForm from './DetailTabCommentForm';
import DetailTabCommentItem from './DetailTabCommentItem';
import { DetailCommentConsumer } from '../contexts/DetailCommentsFormContext.js';
export default function DetailTabCommentList({ comments = [] } = {}) {
  return (
    <div className="product-review-box">
      <DetailCommentConsumer>
        {({ sendComment }) => (
          <DetailTabCommentForm
            onComment={async (rating, comment, productId) => {
              await sendComment(rating, comment, productId);
            }}
          />
        )}
      </DetailCommentConsumer>
      <div className="column-labels attr-labels review-labels">
        <label className="review-date-box">DATE</label>
        <label className="review-reviewer-box">NAME</label>
        <label className="review-rate-box">RATING</label>
        <label className="review-body-box">COMMENT</label>
        <label className="review-btn-box">ACTION</label>
      </div>
      {comments.map(comment => (
        <DetailTabCommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}
