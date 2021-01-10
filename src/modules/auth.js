import JtockAuth from "j-tockauth";
import store from "../state/store/configureStore"

const auth = new JtockAuth({
  host: "http://localhost:3000",
  prefixUrl: "/api",
});

const performAuthentication = async (e) => {
  try {
    e.preventDefault();

    let response = await auth.signUp(
      e.target.elements.email.value,
      e.target.elements.password.value,
       );

    if (response.data.role === "registered_user") {
      store.dispatch({ type: "AUTHENTICATE_USER", payload: response.data.auth });
    } else {
      store.dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: "Registration unsuccessful"
      });
      localStorage.removeItem("J-tockAuth-Storage");
    }
  } catch (error) {
    store.dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error.response.data.errors[0],
    });
  }
};

export default performAuthentication;
