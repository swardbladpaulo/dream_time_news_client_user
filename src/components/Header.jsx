import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import { Button, Image, Menu } from "semantic-ui-react";


const Header = () => {
  const [selectRegisterForm, setRegisterForm] = useState(false);

  return (
    <>
    <Menu>
      <Menu.Item fluid="true"><Image src="./assets/dreamtimesnews.png"/> </Menu.Item>
      <Menu.Item><Button data-cy="register-btn" onClick={() => setRegisterForm(true)}>
        Register here!
      </Button>
      </Menu.Item>
    </Menu>

      {selectRegisterForm && <RegistrationForm />}
    </>
  );
};

export default Header;
