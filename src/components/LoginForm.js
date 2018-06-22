import React, { Component } from 'react';

export default class LoginForm extends Component {
  usernameRef = React.createRef();
  passwordRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const { onLogin } = this.props;
    onLogin(this.usernameRef.current.value, this.passwordRef.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>LOGIN PAGE</h1>
        <label>
          ID
          <input ref={this.usernameRef} placeholder="Your ID" type="text" />
        </label>
        <label>
          Password
          <input
            ref={this.passwordRef}
            placeholder="Your password"
            type="password"
          />
        </label>
        <button>Login</button>
      </form>
    );
  }
}
