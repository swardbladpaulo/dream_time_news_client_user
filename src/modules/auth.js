import JtockAuth from 'j-tockauth';
import store from '../state/store/configureStore';

const auth = new JtockAuth({
  host: 'http://localhost:3000',
  prefixUrl: '/api',
});

const performAuthentication = async (e) => {
  try {
    e.preventDefault();

    let response = await auth.signUp({
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    });

    if (response.data.role === 'registered_user') {
      store.dispatch({
        type: 'SET_CURRENT_USER',
        payload: response.data,
      });debugger
    } else {
      store.dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: 'Registration unsuccessful',
      });
      localStorage.removeItem('J-tockAuth-Storage');
    } 
  } catch (error) {
    store.dispatch({
      type: 'SET_ERROR_MESSAGE',
      payload: error.response.data.errors[0],
    });
  }
};

export default performAuthentication;

