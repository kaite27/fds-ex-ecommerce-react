import React from 'react';
import { Button } from 'react-bootstrap';

export default function DetailTabCommentItem({
  id, // comment's id on json server
  productId, // productId of corresponding product
  body, // comment body
  rating, // comment rating
  date, // data was wrotten a comment
  userId, // userId who left a comment
}) {
  return (
    <div className="review-list-box">
      <div className="review-date-box">
        <span className="review-date">Sun 2018 06 04</span>
      </div>
      <div className="review-reviewer-box">
        <span className="review-viewer">KATE</span>
      </div>
      <div className="review-rate-box">
        <span className="review-rate">4</span>
      </div>
      <div className="review-body-box">
        <span className="review-body">THIS IS REVIEW</span>
      </div>
      <div className="review-btn-box">
        <Button type="submit" bsStyle="primary">
          DELETE
        </Button>
      </div>
    </div>
  );
}
