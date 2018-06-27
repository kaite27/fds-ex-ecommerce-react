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
    <div class="review-list-box">
      <div class="review-date-box">
        <span class="review-date">Sun 2018 06 04</span>
      </div>
      <div class="review-reviewer-box">
        <span class="review-viewer">KATE</span>
      </div>
      <div class="review-rate-box">
        <span class="review-rate">4</span>
      </div>
      <div class="review-body-box">
        <span class="review-body">THIS IS REVIEW</span>
      </div>
      <div class="review-btn-box">
        <Button type="submit" bsStyle="primary">
          DELETE
        </Button>
      </div>
    </div>
  );
}
