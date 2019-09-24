import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

export default class DetailTabCommentForm extends Component {
    state = {
        newCommentBody: '',
    };

    handleInputChange = e => {
        this.setState({
            newCommentBody: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { onComment } = this.props;
        if (localStorage.getItem('token')) {
            onComment(this.ratingRef.value, this.state.newCommentBody);
        } else {
            alert('To leave a review, you need to Login first');
            window.location.href = "/login"
        }
        this.setState({
            newCommentBody: '',
        });
    };

    render() {
        const { newCommentBody } = this.state;
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
                            value={newCommentBody}
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
