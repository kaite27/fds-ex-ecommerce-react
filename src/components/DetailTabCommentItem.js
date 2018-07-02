import React from 'react';
import { Button } from 'react-bootstrap';

export default class DetailTabCommentItem extends React.Component {
  state = {
    value: true,
  };

  onCheckUser = () => {
    parseInt(localStorage.getItem('userId')) === this.props.userId
      ? this.setState({
          value: false,
        })
      : this.setState({
          value: true,
        });
  };
  componentDidMount() {
    this.onCheckUser();
  }
  render() {
    const { body, rating, userId, date, id, onDelete } = this.props;
    return (
      <React.Fragment>
        <div className="review-list-box">
          <div className="review-date-box">
            <span className="review-date">{date}</span>
          </div>
          <div className="review-reviewer-box">
            <span className="review-viewer">{userId}</span>
          </div>
          <div className="review-rate-box">
            <span className="review-rate">{rating}</span>
          </div>
          <div className="review-body-box">
            <span className="review-body">{body}</span>
          </div>
          <div className="review-btn-box">
            <Button
              type="submit"
              bsStyle="primary"
              onClick={e => {
                onDelete(id);
              }}
              disabled={this.state.value}
            >
              DELETE
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
