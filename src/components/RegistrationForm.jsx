import React from "react";
import { Button, Form, Icon, Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { performAuthentication } from "../modules/auth";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector((state) => state.authenticatedUser);
  const errorMessage = useSelector((state) => state.errorMessage);

  return (
    <div>
      <Form
        name="registrationForm"
        data-cy="registration-form"
        onSubmit={(e) => performAuthentication(e, dispatch)}
      >
        <Form.Input
          icon="at"
          type="text"
          label="Email"
          name="email"
          data-cy="email"
          placeholder="Email"
          iconPosition="left"
        />
        <Form.Input
          icon="key"
          type="password"
          label="Password"
          name="password"
          data-cy="password"
          placeholder="password"
          iconPosition="left"
        />
        <Form.Input
          icon="key"
          type="password"
          label="Password confirmation"
          name="password_confirmation"
          data-cy="password-confirmation"
          placeholder="password"
          iconPosition="left"
        />

        <Button data-cy="submit-btn" icon labelPosition="left">
          <Icon name="user"></Icon>
          Register
        </Button>
        {errorMessage && (
          <Message data-cy="error-message">{errorMessage}</Message>
        )}
      </Form>
      {authenticatedUser && (
        <h3 data-cy="header-user-email">
          Logged in as {authenticatedUser.email}
        </h3>
      )}
    </div>
  );
};

export default RegistrationForm;
