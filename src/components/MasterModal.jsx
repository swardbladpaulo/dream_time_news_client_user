import React, { useState } from "react";
import { Button, Icon, Modal, Message } from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";
import { performAuthentication } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";

const MasterModal = () => {
  const dispatch = useDispatch();
  const errorMessage = useSelector((state) => state.errorMessage);
  const authenticatedUser = useSelector((state) => state.authenticatedUser);
  const [firstOpen, setFirstOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);

  const registerAndProceed = (e) => {
    performAuthentication(e, dispatch);
    authenticatedUser ? 
    setSecondOpen(true)
    :
    setSecondOpen(false)
  };

  const finalizePayment = () => {
    setSecondOpen(false);
    setFirstOpen(false);
  };

  return (
    <>
      <Button onClick={() => setFirstOpen(true)} data-cy="register-btn"></Button>
      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
        data-cy="first-registration"
      >
        <Modal.Header>Enter Your Details</Modal.Header>
        <Modal.Content>
          <RegistrationForm />
          <Modal.Description>
            {errorMessage && (
              <p data-cy="error-message">{errorMessage}</p>
            )}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={(e) => registerAndProceed(e)} data-cy="submit-btn" primary>
            Proceed to Payment <Icon name="right chevron" />
          </Button>
        </Modal.Actions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size="medium"
        >
          <Modal.Header>Enter Card Details</Modal.Header>
          <Modal.Content>Card payment form goes here</Modal.Content>
          <Modal.Actions>
            <Button icon="check" content="All Done" onClick={finalizePayment} />
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  );
};

export default MasterModal;
