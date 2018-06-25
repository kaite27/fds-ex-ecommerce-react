import React, { Component } from 'react';
import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class SubscribesProvider extends Component {
  sendEmail = async email => {
    try {
      const payload = {
        email: email,
      };
      const res = await mallAPI.post('/subscribes', payload);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert('Wrong type! Check you email address');
      }
    }
  };

  render() {
    const value = {
      sendEmail: this.sendEmail,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { SubscribesProvider, Consumer as SubscribesConsumer };
