import React, { Component } from 'react';

import {
  Button,
  Form,
  FormGroup,
  FormControl,
  Col,
  HelpBlock,
} from 'react-bootstrap';

export default class SignupForm extends Component {
  state = {
    value: '',
  };

  getValidationState() {
    const length = this.state.value.length;
    if (length >= 4) return 'success';
    else if (length > 0) return 'error';
    return null;
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSignup } = this.props;
    const length = this.state.value.length;
    if (length >= 4) {
      onSignup(this.state.value, this.passwordRef.value);
    } else if (length < 4) {
      alert('Please check your ID.');
    }
  };

  render() {
    return (
      <div className="container">
        <div className="container__inner">
          <h1>SIGNUP PAGE</h1>
          <Form horizontal onSubmit={this.handleSubmit}>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <Col sm={1}>ID</Col>
              <Col sm={3}>
                <FormControl
                  componentClass="input"
                  onChange={this.handleChange}
                  value={this.state.value}
                  type="id"
                  placeholder="Your ID .. "
                />
                <FormControl.Feedback />
                <HelpBlock>Must be at least 4 characters.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={1}>PASSWORD</Col>
              <Col sm={3}>
                <FormControl
                  componentClass="input"
                  inputRef={ref => {
                    this.passwordRef = ref;
                  }}
                  type="password"
                  placeholder="Password .."
                />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10} />
            </FormGroup>
            <Button type="submit">Sign Up</Button>
          </Form>
        </div>
      </div>
    );
  }
}
