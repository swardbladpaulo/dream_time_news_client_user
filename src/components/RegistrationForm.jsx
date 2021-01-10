import React from "react";
import { Button, Form, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { performAuthentication } from "../modules/auth";

const RegistrationForm = () => {
const dispatch = useDispatch()
const errorMessage =  useSelector(state => state.errorMessage)
  return (
    <div>
      <Form 
      name="registrationForm"
      data-cy='registration-form' 
      onSubmit={(event) => performAuthentication(event, dispatch)}
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
          name="password confirmation"
          data-cy="password-confirmation"
          placeholder="password"
          iconPosition="left"
        />

        <Button data-cy="submit-btn" icon labelPosition="left">
          <Icon name="user"></Icon>
          Register
        </Button>

      </Form>
    </div>
  );
};

export default RegistrationForm;
