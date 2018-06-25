import React from 'react';

import NavBar from '../components/NavBar';

export default class NavBarCT extends React.Component {
  state = {
    loggedOut: false,
  };
  render() {
    const { loggedOut } = this.state;
    // if (loggedOut) return <Redirect to="/login" />;
    return (
      <NavBar
      // username={username}
      // brandAs={Link}
      // brandProps={{ to: '/' }}
      // loginAs={Link}
      // loginProps={{ to: '/login' }}
      // onLogout={() => {
      //   logout();
      //   this.setState({ loggedOut: true });
      />
    );
  }
}
