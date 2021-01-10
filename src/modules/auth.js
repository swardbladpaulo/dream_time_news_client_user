import JtockAuth from "j-tockauth";

import React from "react";

const auth = new JtockAuth({
  host: "http://localhost:3000",
  prefixUrl: "/api",
});

const performAuthentication = async (e, dispatch) => {
  try {
    e.preventDefault();
    
    let response = await auth.signIn(
      e.target.elements.email.value,
      e.target.elements.password.value,
      e.target.elements.password_confirmation.value
    );

    if (response.data.role === "registered_user") {
      dispatch({
        type: "SET_CURRENT_USER",
        payload: response.data,
      });
    } else {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: "Registration unsuccessful",
      });
      localStorage.removeItem("J-tockAuth-Storage");
    }
  }
   catch (error) {
    console.log(error);
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error.response.data.errors[0],
    });
  }
};

export default performAuthentication;
