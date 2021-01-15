import React, { useState } from "react";
import { Form, Label } from "semantic-ui-react";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	// CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const submitPayment = async e => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		// const cardNumber = elements.getElement(CardNumberElement)
		// const cardExpiry = elements.getElement(CardExpiryElement)
		// const cardCVC = elements.getElement(CardCVCElement)
		const cardElement = elements.getElement(
			CardNumberElement,
			CardExpiryElement,
			CardCvcElement
		);
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: "card",
			card: cardElement,
		});
		if (!error) {
			const { payment } = paymentMethod;
			const response = await axios.post("api/subscriptions", {
				amount: 6000,
				id: payment,
			});
			return response.paymentMethod;
		} else {
			return error.message;
		}
	};
	return (
		<>
			<Form id="paymentForm" data-cy="payment-form" onSubmit={submitPayment}>
				{/* <CardElement /> */}
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
					<CardCvcElement />
				</Form.Field>
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
