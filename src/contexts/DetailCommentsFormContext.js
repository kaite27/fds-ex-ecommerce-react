import React, { Component } from 'react';
import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class DetailCommentProvider extends Component {
  state = {
    loading: false,
  };

  sendComment = async (rating, comment, productId) => {
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
  };

  render() {
    const value = {
      loading: this.state.loading,
      sendComment: this.sendComment,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { DetailCommentProvider, Consumer as DetailCommentConsumer };
