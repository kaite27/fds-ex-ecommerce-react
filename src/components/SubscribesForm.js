import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

export default class SubscribesForm extends Component {
  // emailRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const { onSubscribe } = this.props;
    onSubscribe(this.emailRef.value);
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineEmail">
          <FormControl
            componentClass="input"
            inputRef={ref => {
              this.emailRef = ref;
            }}
            className="subscribes-form__input"
            type="email"
            placeholder="Your email.."
          />
        </FormGroup>{' '}
        <Button type="submit" bsStyle="primary">
          Send
        </Button>
      </Form>
    );
  }
}
