import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
});

const performAuthentication = async (e, dispatch) => {
  try {
    const response = await auth.signUp({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      password_confirmation: e.target.elements.password_confirmation.value,
    });

    let isAuthenticated = response.data.status === "success";

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
      payload: error.response.data.errors[0],
    });
  }
};
const getAuthHeaders = () => {
  let headers = localStorage.getItem("J-tockAuth-Storage");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json",
  };
  return headers;
};
export { performAuthentication, getAuthHeaders };
