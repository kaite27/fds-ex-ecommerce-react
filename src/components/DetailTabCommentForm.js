import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

export default class DetailTabCommentForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { onComment } = this.props;
    onComment(this.ratingRef.value, this.commentRef.value);
  };

  render() {
    return (
      <div className="new-reviwe-box">
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsSelect">
            <FormControl
              componentClass="select"
              placeholder="select"
              className="review-lable-rate"
              inputRef={ref => {
                this.ratingRef = ref;
              }}
            >
              <option value="★ ★ ★ ★ ★">★ ★ ★ ★ ★</option>
              <option value="★ ★ ★ ★">★ ★ ★ ★</option>
              <option value="★ ★ ★">★ ★ ★</option>
              <option value="★ ★">★ ★</option>
              <option value="★">★</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formInlineComment">
            <FormControl
              componentClass="input"
              inputRef={ref => {
                this.commentRef = ref;
              }}
              className="review-input-comment"
              type="text"
              placeholder="Your comment.."
            />
          </FormGroup>{' '}
          <Button type="submit" bsStyle="primary">
            Leave Comment
          </Button>
        </Form>
      </div>
    );
  }
}
