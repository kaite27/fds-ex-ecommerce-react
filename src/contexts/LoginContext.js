import React, { Component } from 'react';

import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class LoginProvider extends Component {
  state = {
    success: false,
  };
  login = async (username, password) => {
    if (username === '' || password === '') {
      alert('please input ID or Password');
    } else {
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
        this.setState({ success: true });
      } catch (e) {
        if (e.response && e.response.status === 400) {
          alert('Invalid username and password!');
          this.setState({ success: false });
        } else {
          alert('Network error. Please try again.');
        }
      }
    }
  };

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout,
      success: this.state.success,
    };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { LoginProvider, Consumer as LoginConsumer };
