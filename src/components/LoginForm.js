import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl, Col } from 'react-bootstrap';

export default class LoginForm extends Component {
  // usernameRef = React.createRef();
  // passwordRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const { onLogin } = this.props;
    onLogin(this.usernameRef.value, this.passwordRef.value);
  };

  render() {
    return (
      <div className="container">
        <div className="container__inner">
          <h1>LOGIN PAGE</h1>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup controlId="formHorizontalEmail">
              <Col sm={1}>ID</Col>
              <Col sm={3}>
                <FormControl
                  componentClass="input"
                  inputRef={ref => {
                    this.usernameRef = ref;
                  }}
                  type="id"
                  placeholder="admin ;Use it for test purpose only"
                />
              </Col>
            </FormGroup>
            {/* <input ref={this.usernameRef} placeholder="Your ID" type="text" /> */}
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={1}>PASSWORD</Col>
              <Col sm={3}>
                <FormControl
                  componentClass="input"
                  inputRef={ref => {
                    this.passwordRef = ref;
                  }}
                  type="password"
                  placeholder="0"
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10} />
            </FormGroup>
            <Button type="submit">Log in</Button>
          </Form>
        </div>
      </div>
    );
  }
}
