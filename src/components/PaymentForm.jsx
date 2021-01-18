import React from "react";
import { useDispatch } from "react-redux";
import { Form, Label, Button } from "semantic-ui-react";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { getAuthHeaders } from "../modules/auth";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const submitPayment = async () => {
    const cardElement = elements.getElement(
      CardNumberElement,
      CardExpiryElement,
      CardCvcElement
    );
    let headers = getAuthHeaders();
    const stripeToken = await stripe.createToken(cardElement);
    const response = await axios.post(
      "/subscriptions",

      stripeToken,
      { headers: headers }
    );
    if (response.status === 201) {
      dispatch({
        type: "SET_USER_AS_SUBSCRIBER",
        payload: { role: "subscriber" },
      });
      dispatch({
        type: "PAYMENT_SUCCESS",
        payload: response.data.message,
      });
    } else {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: response.message,
      });
    }
  };

  return (
    <>
      <Form id="paymentForm" data-cy="payment-form" onSubmit={submitPayment}>
        <Form.Field data-cy="card-number">
          <Label>{t("CardNumber")}</Label>
          <CardNumberElement />
        </Form.Field>
        <Form.Field data-cy="card-expiry">
          <Label>{t("ExpiryDate")}</Label>
          <CardExpiryElement />
        </Form.Field>
        <Form.Field data-cy="card-cvc">
          <Label>CVC</Label>
          <CardCvcElement />
        </Form.Field>
        <Button
          icon="check"
          content={t("SubscribeNow")}
          type="submit"
          form="paymentForm"
          data-cy="submit-payment"
          primary
        />
      </Form>
    </>
  );
};

export default PaymentForm;
