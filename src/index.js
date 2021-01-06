import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import store from './state/store/configureStore';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://dream-time-news-api.herokuapp.com'
    : 'http://localhost:3000/api';

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
