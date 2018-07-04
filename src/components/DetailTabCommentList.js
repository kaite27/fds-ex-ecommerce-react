import React from 'react';

import DetailTabCommentForm from './DetailTabCommentForm';
import DetailTabCommentItem from './DetailTabCommentItem';
import LoadingBox from '../components/LoadingBox';
import { DetailCommentConsumer } from '../contexts/DetailCommentsFormContext.js';
export default class DetailTabCommentList extends React.Component {
  render() {
    return (
      <div className="product-review-box">
        <DetailCommentConsumer>
          {({ loading, comments, sendComment, deleteComment }) =>
            loading ? (
              <LoadingBox />
            ) : (
              <React.Fragment>
                <DetailTabCommentForm
                  onComment={async (rating, comment) => {
                    await sendComment(rating, comment);
                  }}
                />
                <div className="column-labels attr-labels review-labels">
                  <label className="review-date-box">DATE</label>
                  <label className="review-reviewer-box">NAME</label>
                  <label className="review-rate-box">RATING</label>
                  <label className="review-body-box">COMMENT</label>
                  <label className="review-btn-box">ACTION</label>
                </div>
                {comments.map(comment => (
                  <DetailTabCommentItem
                    onDelete={deleteComment}
                    key={comment.id}
                    {...comment}
                  />
                ))}
              </React.Fragment>
            )
          }
        </DetailCommentConsumer>
      </div>
    );
  }
}
