import React, { useState } from "react";
import { Button, Form, Icon, Message, Modal } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { performAuthentication } from "../modules/auth";

// const RegistrationForm = () => {
//   const dispatch = useDispatch();
//   const authenticatedUser = useSelector((state) => state.authenticatedUser);
//   const errorMessage = useSelector((state) => state.errorMessage);

  const RegisterModal = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const onCancelHandler = (e) => {
      e.preventDefault();
      setOpen(false);
    };
  
    const onAuthenticateHandler = async (e) => {
      e.preventDefault();
      const successful = await performAuthentication(e, dispatch);
      setOpen(!successful);
    };

  return (
       <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button 
        data-cy="register-btn" 
          color="olive"
          onClick={() => setOpen({ renderRegisterForm: true })}
        >
          Register
        </Button>
      } 
      >
      <Form
        name="registrationForm"
        data-cy="registration-form"
        onSubmit={onAuthenticateHandler}
        // onSubmit={(e) => performAuthentication(e, dispatch)}
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
        <Modal.Actions>
          <Button color="black" onClick={onCancelHandler}>
            Nope
          </Button>
          <Button
            data-cy="submit-btn" 
            onClick={onAuthenticateHandler}
            content="Yes please!"
            labelPosition="right"
            icon="checkmark"
            positive
          />
        </Modal.Actions>
        
        {/* {errorMessage && (
          <Message data-cy="error-message">{errorMessage}</Message>
        )} */}
      </Form>
      </Modal>
      // {authenticatedUser && (
      //   <h3 data-cy="header-user-email">
      //     Logged in as {authenticatedUser.email}
      //   </h3>
      // )}
   
  );
};

export default RegisterModal;
