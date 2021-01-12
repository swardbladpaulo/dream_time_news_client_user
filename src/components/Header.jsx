import React, { useState } from "react";
import RegisterModal from "./RegistrationForm";
import { Button, Image, Menu } from "semantic-ui-react";


const Header = () => {
  const [selectRegisterForm, setRegisterForm] = useState(false);

  return (
    <>
    <Menu>
      <Menu.Item><Image src="./assets/dreamtimesnews.png"/> </Menu.Item>
      <Menu.Item><RegisterModal></RegisterModal>
        
        {/* <Button data-cy="register-btn" onClick={() => setRegisterForm(true)}>
        Register here!
      </Button> */}
      </Menu.Item>
    </Menu>

      {/* {selectRegisterForm && <RegisterModal />} */}
    </>
  );
};

export default Header;
