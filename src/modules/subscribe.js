import axios from "axios";
import {
	CardNumberElement,
	CardExpiryElement,
	CardCVCElement,
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

const submitPayment = async e => {
	const stripe = useStripe();
	const elements = useElements();
	e.preventDefault();
	if (!stripe || !elements) {
		return;
	}
	const cardNumber = elements.getElement(CardNumberElement);
	const cardExpiry = elements.getElement(CardExpiryElement);
	const cardCVC = elements.getElement(CardCVCElement);
	const cardElement = elements.getElement(CardElement);
	const { error, paymentMethod } = await stripe.createPaymentMethod({
		type: "card",
		card: cardElement,
	});
	try {
		const { payment } = paymentMethod;
		const response = await axios.post("/subscriptions", {
			amount: 6000,
			id: payment,
		});
		return response.data;
	} catch (error) {
		return error.message;
	}
};

export { submitPayment };
