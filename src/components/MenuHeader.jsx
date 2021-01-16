import React from "react";
import { Menu, Segment, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MasterModal from "./MasterModal";
import i18n from "../i18n";

const MenuHeader = () => {
  const changeLanguage = (e) => {
    i18n.changeLanguage (e.target.id)
  }

  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to={{ pathname: "/" }} >
          <Image 
            src="./assets/dreamtimesnews.png" 
            size="large" 
            fluid="true" 
          />
        </Menu.Item >
        <Menu.Item name="En" >
          <Image 
            id="en" onClick={(e) => { changeLanguage(e) }}
            src="./assets/united-states.png"
            size="mini" 
          />
        </Menu.Item>
        <Menu.Item name="Sv" >
          <Image 
            id="sv" onClick={(e) => { changeLanguage(e) }}
            src= "./assets/sweden.png"
            size="mini"  
          />
        </Menu.Item>

        <Menu.Item position="right">
          <MasterModal />
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default MenuHeader;
