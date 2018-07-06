import React, { Component } from 'react';

import mallAPI from '../mallAPI.js';

const { Provider, Consumer } = React.createContext();

class SignupProvider extends Component {
  state = {
    success: false,
  };

  signup = async (username, password) => {
    try {
      const payload = {
        username: username,
        password: password,
      };
      await mallAPI.post('/users/register', payload);
      const loginRes = await mallAPI.post('/users/login', payload);

      localStorage.setItem('token', loginRes.data.token);
      localStorage.setItem('username', username);

      const UserRes = await mallAPI.get('/me');
      localStorage.setItem('userId', UserRes.data.id);
      this.setState({ success: true });
    } catch (e) {
      if (e.response && e.response.status === 400) {
        alert('ID is Duplicated!');
        this.setState({ success: false });
      } else {
        alert('Network error. Please try again.');
      }
    }
  };

  render() {
    const value = {
      signup: this.signup,
      success: this.state.success,
    };

    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { SignupProvider, Consumer as SignConsumer };
