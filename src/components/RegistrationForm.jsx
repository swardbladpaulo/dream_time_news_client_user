import React from "react";
import { Form } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const RegistrationForm = (props) => {
  const { t } = useTranslation();

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
          label={t ('menuHeader_3')}
          name="password"
          data-cy="password"
          placeholder={t ('menuHeader_3')}
          iconPosition="left"
        />
        <Form.Input
          icon="key"
          type="password"
          label={t ("menuHeader_4")}
          name="password_confirmation"
          data-cy="password-confirmation"
          placeholder={t ("menuHeader_4")}
          iconPosition="left"
        />
      </Form>
    </>
  );
};

export default RegistrationForm;
