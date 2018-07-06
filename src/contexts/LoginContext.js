import React, { Component } from 'react';

import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class LoginProvider extends Component {
  state = {
    success: false,
    loading: false,
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

        this.setState({ loading: true });
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
          alert('Invalid username and password!');
          this.setState({ success: false });
        } else {
          alert('Network error. Please try again.');
        }
      } finally {
        this.setState({ success: true, loading: false });
      }
    }
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout,
      success: this.state.success,
      loading: this.state.loading,
    };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { LoginProvider, Consumer as LoginConsumer };
