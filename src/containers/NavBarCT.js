import React from 'react';

import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';

export default class NavBarCT extends React.Component {
  state = {
    loggedOut: false,
  };

  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    this.setState({ loggedOut: true });
  };

  render() {
    return (
      <NavBar
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
