import React, { useState } from "react";
import {
  Button,
  Icon,
  Modal,
  Message,
  ModalDescription,
} from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";
import { performAuthentication } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";

const MasterModal = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const authenticatedUser = useSelector((state) => state.authenticatedUser);
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  const registerAndProceed = async (e) => {
    await performAuthentication(e, dispatch);
    authenticatedUser ? setSecondOpen(true) : setSecondOpen(false);
  };

  const finalizePayment = () => {
    setSecondOpen(false);
    setFirstOpen(false);
  };

  return (
    <>
      <Button onClick={() => setFirstOpen(true)} data-cy="register-btn">
        Register To View Premium Content
      </Button>
      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
        data-cy="first-registration"
      >
        <Modal.Header>Enter Your Details</Modal.Header>
        <Modal.Content>
          <RegistrationForm registerAndProceed={registerAndProceed} />
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
            Proceed to Payment <Icon name="right chevron" />
          </Button>
        </Modal.Actions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size="medium"
        >
          <Modal.Header>
            <h3 data-cy="header-user-email">
              Logged in as {authenticatedUser.email}
            </h3>
          </Modal.Header>
          <Modal.Header>Enter Card Details</Modal.Header>
          <Modal.Content>Card payment form goes here</Modal.Content>
          <Modal.Description></Modal.Description>
          <Modal.Actions>
            <Button icon="check" content="All Done" onClick={finalizePayment} />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  );
};

export default MasterModal;
