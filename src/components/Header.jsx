import React, { useState } from "react";
import RegisterModal from "./RegistrationForm";
import { Button, Image, Menu } from "semantic-ui-react";


const Header = () => {
  const [selectRegisterForm, setRegisterForm] = useState(false);

  return (
    <>
