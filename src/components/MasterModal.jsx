import React, { useState } from "react";
import {
  Button,
  Icon,
  Modal,
  Message,
} from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";
import { performAuthentication } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";

const MasterModal = () => {
  const dispatch = useDispatch();
  const {errorMessage, currentUser} = useSelector((state) => state);
  const authenticated = useSelector((state) => state.authenticated)
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  const registerAndProceed = (e) => {
    e.preventDefault();
    performAuthentication(e, dispatch);
    // currentUser ? setSecondOpen(true) : setSecondOpen(false);
    setSecondOpen(authenticated)
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
        <Modal.Actions data-cy="first-form-submit">
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
          <Modal.Header data-cy="header-user-email">
            <h3 >
              Logged in as {currentUser.email}
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
