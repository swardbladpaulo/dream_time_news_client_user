import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";

const Header = () => {
  const [selectRegisterForm, setRegisterForm] = useState(false);

  return (
    <>
     <button data-cy="register-btn" onClick={() => setRegisterForm(true)}>
        Register here!
      </button> 

      {selectRegisterForm && <RegistrationForm />}
    </>
  );
};

export default Header;
