import React, { useState }from "react";
import { Menu, Segment, Image, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MasterModal from "./MasterModal";
import i18n from "../i18n";
import LoginForm from './LoginForm'

const MenuHeader = () => {
  const [selectLoginForm, setLoginForm] = useState(false);
  const changeLanguage = (e) => {
    i18n.changeLanguage (e.target.id)
  }

  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to={{ pathname: "/" }} >
          <Image 
            src="./assets/NewTimeDreamsLogo.png" 
            size="large" 
            fluid="true" 
          />
        </Menu.Item >
    
        <Menu.Item position="right">
        <Menu.Item name="En"  >
          <Image 
            data-cy="us-btn"
            id="en" onClick={(e) => { changeLanguage(e) }}
            src="./assets/united-kingdom.png"
            size="mini" 
            style={{
              padding: 5,
              margin: 5,
            }}
          />
          <Image 
            data-cy="se-btn"
            id="sv" onClick={(e) => { changeLanguage(e) }}
            src= "./assets/sweden.png"
            size="mini"  
            style={{
              padding: 5,
              margin: 5,
            }}
          />
          </Menu.Item>
          <Button
            icon labelPosition="left"
            icon="user"
            data-cy="login-btn"
            onClick={(e) => setLoginForm(true)}>
            <Icon name="user"></Icon>
            Login
          </Button>
          {selectLoginForm && <LoginForm />}
          <MasterModal />
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default MenuHeader;
