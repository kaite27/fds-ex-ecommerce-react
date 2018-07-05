import React from 'react';

import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

export default class NavBarCT extends React.Component {
  state = {
    loggedOut: false,
    cartItem: null,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        cartItem: localStorage.getItem('cartItem'),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('cartItem');
    this.setState({ loggedOut: true });
    window.location.reload();
  };

  render() {
    const { cartItem } = this.state;
    return (
      <NavBar
        cartItem={cartItem}
        loginAs={Link}
        loginProps={{ to: '/login' }}
        signupAs={Link}
        signupPros={{ to: '/register' }}
        onLogout={() => {
          this.logout();
        }}
      />
    );
  }
}
