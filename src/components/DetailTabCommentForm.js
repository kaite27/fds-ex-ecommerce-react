import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

export default class DetailTab extends Component {
  commentRef = React.createRef();
  ratingRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const { onComment } = this.props;
    onComment(this.ratingRef.current.value, this.commentRef.current.value);
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
              inputRef={this.ratingRef}
            >
              <option value="*****">*****</option>
              <option value="****">****</option>
              <option value="***">***</option>
              <option value="**">**</option>
              <option value="*">*</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formInlineComment">
            <FormControl
              componentClass="input"
              inputRef={this.commentRef}
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
