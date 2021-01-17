import React from "react";
import { Form } from "semantic-ui-react";
import { useTranslation } from "react-i18next";

const RegistrationForm = props => {
  const { t } = useTranslation();

  return (
    <>
      <Form
        id="registrationForm"
        data-cy="registration-form"
        onSubmit={e => props.registerAndProceed(e)}
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
          label={t("Password")}
          name="password"
          data-cy="password"
          placeholder={t("Password")}
          iconPosition="left"
        />
        <Form.Input
          icon="key"
          type="password"
          label={t("Password-conf")}
          name="password_confirmation"
          data-cy="password-confirmation"
          placeholder={t("Password-conf")}
          iconPosition="left"
        />
      </Form>
    </>
  );
};

export default RegistrationForm;
