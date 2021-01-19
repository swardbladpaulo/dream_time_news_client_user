import React from "react";
import { Form, Button, Icon, Message, Segment } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { performAuthentication } from "../modules/auth";

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  return (
    <>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 24,
          color: "red",
        }}
      >
        LoginForm
      </div>
      <Segment placeholder>
        <Form
          id="LoginForm"
          data-cy="login-form"
          onSubmit={(e) => performAuthentication(e, dispatch)}
        >
          <Form.Input
            data-cy="email"
            icon="at"
            type="text"
            label="Email"
            name="email"
            placeholder="Enter your Email"
            iconPosition="left"
          />
          <Form.Input
            data-cy="password"
            icon="key"
            label="Password"
            placeholder="Enter your Password"
            iconPosition="left"
          />
          <Button data-cy="login-btn" icon labelPosition="left" color="red">
            <Icon name="user"></Icon>
            Login
          </Button>
          {errorMessage && (
            <Message data-cy="error-message">{errorMessage}</Message>
          )}
        </Form>
      </Segment>
    </>
  );
};

export default LoginForm;
