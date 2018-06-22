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
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert('Wrong ID or Password!');
      }
    }
  };

  logout = () => {
    localStorage.removeItem('token');
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { LoginProvider, Consumer as LoginConsumer };
