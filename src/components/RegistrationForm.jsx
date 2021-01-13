import React from "react";
import { Form, Icon } from "semantic-ui-react";

const RegistrationForm = (props) => {
  return (
    <>
      <Form
        id="registrationForm"
        data-cy="registration-form"
        onSubmit={(e) => props.registerAndProceed(e)}
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
      </Form>
    </>
  );
};

export default RegistrationForm;
