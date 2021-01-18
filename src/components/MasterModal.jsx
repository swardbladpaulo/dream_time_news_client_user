import React, { useState } from "react";
import { Button, Icon, Modal, Message } from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";
import PaymentForm from "./PaymentForm";
import { performAuthentication } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

const MasterModal = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    errorMessage,
    authenticated,
    currentUser,
    successMessage,
  } = useSelector(state => state);

  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(true);

  const registerAndProceed = e => {
    e.preventDefault();
    performAuthentication(e, dispatch);
  };

  const finalizePayment = () => {
    setSecondOpen(false);
    setFirstOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setFirstOpen(true)}
        data-cy="register-btn"
        color="red"
        size="huge"
      >
        {t("register-btn")}
      </Button>
      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
        data-cy="first-registration"
      >
        <Modal.Header>{t("Enter Your Details")}</Modal.Header>
        <Modal.Content>
          <RegistrationForm
            data-cy="registration-form"
            registerAndProceed={registerAndProceed}
          />
          <Modal.Description>
            {errorMessage && (
              <Message color="red" data-cy="error-message">
                {errorMessage}
              </Message>
            )}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            type="submit"
            form="registrationForm"
            data-cy="submit-btn"
            primary
          >
            {t("Proceed to Payment")} <Icon name="right chevron" />
          </Button>
        </Modal.Actions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen && authenticated}
          size="medium"
          data-cy="payment-details"
        >
          <Modal.Header data-cy="header-user-email">
            <Message>
              {t("LoggedInAs")} {currentUser.email}
            </Message>
          </Modal.Header>
          <Modal.Header>{t("CardDetails")}</Modal.Header>
          <Modal.Content>
            {errorMessage && (
              <Message data-cy="payment-message" color="red">
                {errorMessage}
              </Message>
            )}
            {successMessage ? (
              <Message color="green" data-cy="payment-message">
                {successMessage}
              </Message>
            ) : (
              <PaymentForm data-cy="payment-form" />
            )}
          </Modal.Content>
          <Modal.Actions>
            <Button
              icon="check"
              content={t("AllDone")}
              data-cy="all-done"
              onClick={finalizePayment}
              primary
            />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  );
};

export default MasterModal;
