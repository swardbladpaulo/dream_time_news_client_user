import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "http://localhost:3000",
  prefixUrl: "/api",
});

const performAuthentication = async (e, dispatch) => {
  try {
    e.preventDefault();
    let response = await auth.signUp({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      password_confirmation: e.target.elements.password_confirmation.value,
    });

    if (response.data.data.role === "registered_user") {
      dispatch({
        type: "SET_CURRENT_USER",
        payload: response.data.data,
      });
    } else {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: "Registration unsuccessful",
      });
      localStorage.removeItem("J-tockAuth-Storage");
    }
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: "error bigi",
    });
  }
};

export { performAuthentication };
