import React from "react";
import { Form, Label } from "semantic-ui-react";
import {
  CardNumberElement,
  injectStripe,
  CardCVCElement,
  CardExpiryElement,
} from "react-stripe-elements";

const PaymentForm = ({ onSubscribe, stripe }) => {
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
  return (
    <>
      <Form id="paymentForm" data-cy="payment-form" onSubmit={performPayment}>
        <Form.Field data-cy="card-number">
          <Label>Card Number</Label>
          <CardNumberElement />
        </Form.Field>
        <Form.Field data-cy="card-expiry">
          <Label>Expiry Date</Label>
          <CardExpiryElement />
        </Form.Field>

        <Form.Field data-cy="card-cvc">
          <Label>CVC</Label>
          <CardCVCElement />
        </Form.Field>
      </Form>
    </>
  );
};

export default injectStripe(PaymentForm);
