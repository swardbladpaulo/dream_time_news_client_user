import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Label, Message, Button } from "semantic-ui-react";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCvcElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState(null);
	const [stripeToken, setStripeToken] = useState(null);
	const [successMess, setSuccessMess] = useState("");

	const submitPayment = async () => {
		const cardElement = elements.getElement(
			CardNumberElement,
			CardExpiryElement,
			CardCvcElement
		);
		const { token, error } = await stripe.createToken(cardElement);
		if (!error) {
			setStripeToken(token);
			setErrorMessage(null);
		} else {
			setErrorMessage(error.message);
			setStripeToken(null);
		}
		const response = await axios.post("/subscriptions", {
			amount: 600,
			token: stripeToken,
		});
		if (response.status === 200) {
			dispatch({
				type: "SET_USER_AS_SUBSCRIBER",
				payload: {
					role: "subscriber",
				},
			});
			setSuccessMess(`You are now a subscriber ${response.data.data.email}`);
		} else {
			setErrorMessage(response.error.message);
		}
	};
	return (
		<>
			{errorMessage && (
				<Message data-cy="payment-message" color="red">
					{errorMessage}
				</Message>
			)}
			{successMess ? (
				<Message color="green" data-cy="payment-message">
					{successMess}
				</Message>
			) : (
				<Form id="paymentForm" data-cy="payment-form" onSubmit={submitPayment}>
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
					<Button
						icon="check"
						content="Subscribe now!"
						type="submit"
						form="paymentForm"
						data-cy="submit-payment"
						primary
					/>
				</Form>
			)}
		</>
	);
};

export default PaymentForm;
