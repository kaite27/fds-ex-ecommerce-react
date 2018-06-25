import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  InputGroup,
} from 'react-bootstrap';

export default class SubscribesForm extends Component {
  emailRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const { onSubscribe } = this.props;
    onSubscribe(this.emailRef.current.value);
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineEmail">
          <FormControl ref={this.emailRef} />
          <InputGroup>
            <InputGroup.Addon>
              <input
                className="subscribes-form__input"
                ref={this.emailRef}
                type="email"
                placeholder="Your email.."
              />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>{' '}
        <Button type="submit" bsStyle="primary">
          Send
        </Button>
      </Form>
    );
  }
}
