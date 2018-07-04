import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

export default class DetailTabCommentForm extends Component {
  state = {
    newTodoBody: '',
  };

  handleInputChange = e => {
    this.setState({
      newTodoBody: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onComment } = this.props;
    if (localStorage.getItem('token')) {
      onComment(this.ratingRef.value, this.state.newTodoBody);
    } else {
      alert('Need to Login');
    }
    this.setState({
      newTodoBody: '',
    });
  };

  render() {
    const { newTodoBody } = this.state;
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
              className="review-input-comment"
              type="text"
              placeholder="Your comment.."
              value={newTodoBody}
              onChange={this.handleInputChange}
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
