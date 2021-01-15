// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
// 	CardNumberElement,
// 	CardExpiryElement,
// 	CardCvcElement,
// 	useStripe,
// 	useElements,
// } from "@stripe/react-stripe-js";
// import axios from "axios";

// const submitPayment = async e => {
// 	const stripe = useStripe();
// 	const elements = useElements();
// 	const dispatch = useDispatch();
// 	const [errorMessage, setErrorMessage] = useState(null);
// 	const [token, setToken] = useState(null);
// 	e.preventDefault();
// 	const cardElement = elements.getElement(
// 		CardNumberElement,
// 		CardExpiryElement,
// 		CardCvcElement
// 	);
// 	const { stripeToken, error } = await stripe.createToken(cardElement);
// 	if (!error) {
// 		setToken(stripeToken);
// 		setErrorMessage(null);
// 	} else {
// 		setErrorMessage(error.message);
// 		setToken(null);
// 	}
// 	const response = await axios.post("/subscriptions", {
// 		amount: 600,
// 		token: stripeToken,
// 	});
// 	if (response.status === 200) {
// 		dispatch({
// 			type: "SET_USER_AS_SUBSCRIBER",
// 			payload: {
// 				role: "subscriber",
// 			},
// 		});
// 	} else {
// 		setErrorMessage(response.error.message);
// 	}
// };

// export { submitPayment };
