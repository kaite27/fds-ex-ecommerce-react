import React, { Component } from 'react';
import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class DetailCommentProvider extends Component {
  state = {
    loading: false,
    comments: [],
  };
  async componentDidMount() {
    await this.fetchComments();
  }
  fetchComments = async () => {
    const { id } = this.props;
    this.setState({
      loading: true,
    });
    const reviewRes = await mallAPI.get(`/reviews?productId=${id}`);

    this.setState({
      comments: reviewRes.data.map(p => p),
      loading: false,
    });
  };

  sendComment = async (rating, comment) => {
    this.setState({
      loading: true,
    });
    try {
      const now = new Date();
      const payload = {
        body: comment,
        rating: rating,
        date: now.toDateString(),
        productId: parseInt(this.props.id, 10),
        userId: localStorage.getItem('userId'),
      };
      await mallAPI.post('/reviews', payload);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert('error!!');
      }
    } finally {
      this.setState({
        loading: false,
      });
    }
    await this.fetchComments();
  };
  deleteComment = async id => {
    this.setState({
      loading: true,
    });
    await mallAPI.delete(`reviews/${id}`);
    await this.fetchComments();
  };

  render() {
    const value = {
      loading: this.state.loading,
      comments: this.state.comments,
      sendComment: this.sendComment,
      deleteComment: this.deleteComment,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { DetailCommentProvider, Consumer as DetailCommentConsumer };
