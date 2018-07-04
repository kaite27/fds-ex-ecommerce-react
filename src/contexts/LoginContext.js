import React, { Component } from 'react';
import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class LoginProvider extends Component {
  login = async (username, password) => {
    try {
      const payload = {
        username: username,
        password: password,
      };
      const res = await mallAPI.post('/users/login', payload);

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('username', username);

      const UserRes = await mallAPI.get('/me');
      localStorage.setItem('userId', UserRes.data.id);

      const cartRes = await mallAPI.get('/carts');
      const cartItem = cartRes.data.map(c => ({
        id: c.id,
      })).length;
      localStorage.setItem('cartItem', cartItem);
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert('Wrong ID or Password!');
      }
    }
  };

  render() {
    const value = {
      login: this.login,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { LoginProvider, Consumer as LoginConsumer };
