import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RegistrationForm from './RegistrationForm';

const Header = () => {
  const currentUser = useSelector((state) => state.currentUser);

  const auth = useSelector((state) => state.auth);

  const [selectRegisterForm, setRegisterForm] = useState(false);

  return (
    <>
      <h3 data-cy="header-user-email">
        {currentUser
          ? `Logged in as ${currentUser.uid}`
          : 'You are not logged in'}
      </h3>
      <button data-cy="register-btn" onClick={(e) => setRegisterForm(true)}>
        Register here!
      </button>
      {selectRegisterForm && <RegistrationForm />}
      {auth && auth.message}
    </>
  );
};

export default Header;
