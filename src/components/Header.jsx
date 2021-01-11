import React, { useState } from "react";
import { useSelector } from "react-redux";
import RegistrationForm from "./RegistrationForm";

const Header = () => {
  debugger
  const [selectRegisterForm, setRegisterForm] = useState(false);
  debugger
  const authenticatedUser = useSelector((state) => state.authenticatedUser);  
debugger
  return (
    <>
      <button data-cy="register-btn" onClick={() => setRegisterForm(true)}>
        Register here!
      </button>

      <h3 data-cy="header-user-email">
        {authenticatedUser
          ? `Logged in as ${authenticatedUser.uid}`
          : "You are not logged in"}
      </h3>
      {selectRegisterForm && <RegistrationForm />}
      {authenticatedUser && authenticatedUser.message}
    </>
  );
};

export default Header;
