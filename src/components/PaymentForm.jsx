import React from "react";
import { Form, Label } from "semantic-ui-react";
import {CardNumberElement, CardExpiryElement, CardCVCElement, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from "axios";

const PaymentForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const submitPayment = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }
    // const cardNumber = elements.getElement(CardNumberElement)
    // const cardExpiry = elements.getElement(CardExpiryElement)
    // const cardCVC = elements.getElement(CardCVCElement)
    const cardElement = elements.getElement(CardElement)
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })
    try {
      const { payment } = paymentMethod
      const response = await axios.post(
        "/subscriptions",
        {
          amount: 6000,
          id: payment,
        }
      )
      return response.data
    } catch (error) {
      return error.message
    }
  }
  return (
    <>
     <Form onSubmit={submitPayment}>
       <CardElement />
     </Form>
    </>
  );
};

export default PaymentForm;

// const payWithStripe = async (stripeToken) => {
  //   let headers = JSON.parse(localStorage.getItem("credentials"));
  //   let response = await axios.post(
  //     "/subscriptions",
  //     { stripeToken: stripeToken },
  //     { headers: headers }
  //   );
  //   onSubscribe(response.data.paid ? response.data.message : "Whoops!");
  // };

  // const performPayment = async (e) => {
  //   let stripeResponse = await props.stripe.createToken();
  //   stripeResponse.token && props.payWithStripe(stripeResponse.token.id);
  // };

//   <Form id="paymentForm" data-cy="payment-form" onSubmit={submitPayment}>
//   <Form.Field data-cy="card-number">
//     <Label>Card Number</Label>
//     <CardNumberElement />
//   </Form.Field>
//   <Form.Field data-cy="card-expiry">
//     <Label>Expiry Date</Label>
//     <CardExpiryElement />
//   </Form.Field>
//   <Form.Field data-cy="card-cvc">
//     <Label>CVC</Label>
//     <CardCVCElement />
//   </Form.Field>
// </Form>