import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import store from "./state/store/configureStore";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const stripePromise = loadStripe(
  "pk_test_51HuxhoEDdj3L9cb7mRwXVf3mjnVY7dk7NL7WmIZ31HGjkKHk9RSQASdCWIXiObHTiyfYkNhxKFsvLFkvLKyxM6Wz004BVP7pWj"
);


window.store = store;

ReactDOM.render(
  <Elements stripe={stripePromise}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </Elements>,

  document.getElementById("root")
);

reportWebVitals();
