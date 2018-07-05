import React, { Component } from 'react';
import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class SubscribesProvider extends Component {
  state = {
    loading: false,
  };

  sendEmail = async email => {
    this.setState({
      loading: true,
    });
    try {
      const payload = {
        email: email,
      };
      await mallAPI.post('/subscribes', payload);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert('Wrong type! Check you email address');
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
      sendEmail: this.sendEmail,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { SubscribesProvider, Consumer as SubscribesConsumer };
