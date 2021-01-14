import axios from 'axios'

const payWithStripe = async (stripeToken) => {
  let headers = JSON.parse(localStorage.getItem("credentials"));
  let response = await axios.post(
    "/subscriptions",
    { stripeToken: stripeToken },
    { headers: headers }
  );
  onSubscribe(response.data.paid ? response.data.message : "Whoops!");
};

const performPayment = async (e) => {
  let stripeResponse = await stripe.createToken();
  stripeResponse.token && payWithStripe(stripeResponse.token.id);
};

export { performPayment }