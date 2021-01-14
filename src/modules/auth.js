import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: "http://localhost:3000",
  prefixUrl: "/api",
});

const performAuthentication = async (e, dispatch) => {
  try {
    const response = await auth.signUp({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      password_confirmation: e.target.elements.password_confirmation.value,
    });
    
    let isAuthenticated = ( response.data.status === "success" )
    
    dispatch({
      type: "SET_CURRENT_USER",
      payload: {
        authenticated: isAuthenticated,
        currentUser: response.data.data,
      },
    });
  } catch (error) {
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error.response.data.errors,
    });
  }
};

export { performAuthentication };
