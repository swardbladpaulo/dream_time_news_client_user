import JtockAuth from 'j-tockauth';
// import store from '../state/store/configureStore';

const auth = new JtockAuth({
  host: 'http://localhost:3000',
  prefixUrl: '/api',
});

const performAuthentication = async (e, dispatch) => {
  debugger
  try {
    e.preventDefault();
    debugger
    let response = await auth.signIn(
    e.target.elements.email.value,
    e.target.elements.password.value,
    e.target.elements.password_confirmation.value,
    );
debugger
    if (response.data.role === 'registered_user') {
      debugger
      dispatch({
        type: 'SET_CURRENT_USER',
        payload: { auth: true }
      });
    } else {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: 'Registration unsuccessful',
      });
      localStorage.removeItem('J-tockAuth-Storage');
    } 
  } catch (error) {
    debugger
    dispatch({
      type: 'SET_ERROR_MESSAGE',
      payload: "error bigi",
    });
  }
};

export {performAuthentication};

