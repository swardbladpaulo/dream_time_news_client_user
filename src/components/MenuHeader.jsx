import React from "react";
import { Label, Menu, Segment, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import MasterModal from "./MasterModal";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";

const MenuHeader = () => {
  const { t } = useTranslation();
  const changeLanguage = e => {
    i18n.changeLanguage(e.target.id);
  };

  return (
    <Segment inverted>
      <Menu inverted>
        <Menu.Item as={Link} to={{ pathname: "/" }}>
          <Image
            src="./assets/NewTimeDreamsLogo.png"
            size="large"
            fluid="true"
          />
        </Menu.Item>
        <Menu.Item position="right">

              <Menu.Item>
                <Label
                  pointing="right"
                  size="huge"
                  color="green"
                  icon="star"
                  content={t("Label")}
                />
    
                <MasterModal />
              </Menu.Item>
          <Menu.Item name="En">
            <Image
              data-cy="us-btn"
              id="en"
              onClick={e => {
                changeLanguage(e);
              }}
              src="./assets/united-kingdom.png"
              size="mini"
              style={{
                padding: 5,
                margin: 5,
              }}
            />
            <Image
              data-cy="se-btn"
              id="sv"
              onClick={e => {
                changeLanguage(e);
              }}
              src="./assets/sweden.png"
              size="mini"
              style={{
                padding: 5,
                margin: 5,
              }}
            />
          </Menu.Item>
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default MenuHeader;
