import React, { useState } from "react";
import { Button, Icon, Modal, Message } from "semantic-ui-react";
import RegistrationForm from "./RegistrationForm";
import PaymentForm from "./PaymentForm";
import { performAuthentication } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useTranslation } from "react-i18next";

const stripePromise = loadStripe(
  "pk_test_51HuxhoEDdj3L9cb7mRwXVf3mjnVY7dk7NL7WmIZ31HGjkKHk9RSQASdCWIXiObHTiyfYkNhxKFsvLFkvLKyxM6Wz004BVP7pWj"
);

const MasterModal = () => {
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const { errorMessage, authenticated, currentUser } = useSelector(
		state => state
	);
	const [firstOpen, setFirstOpen] = useState(false);
	const [secondOpen, setSecondOpen] = useState(false);

  const registerAndProceed = e => {
    e.preventDefault();
    performAuthentication(e, dispatch);
    setSecondOpen(authenticated);
  };

  const finalizePayment = () => {
    setSecondOpen(false);
    setFirstOpen(false);
  };

	return (
		<>
			<Button onClick={() => setFirstOpen(true)} data-cy="register-btn" color="red" size="huge" >
				{t('register-btn')}
			</Button>
			<Modal
				onClose={() => setFirstOpen(false)}
				onOpen={() => setFirstOpen(true)}
				open={firstOpen}
				data-cy="first-registration"
			>
				<Modal.Header>{t("Enter Your Details") }</Modal.Header>
				<Modal.Content>
					<RegistrationForm
						data-cy="registration-form"
						registerAndProceed={registerAndProceed}
					/>
					<Modal.Description>
						{errorMessage && (
							<Message color="red" data-cy="error-message">
								{errorMessage}
							</Message>
						)}
					</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						type="submit"
						form="registrationForm"
						data-cy="submit-btn"
						primary
					>
						{t ("Proceed to Payment")} <Icon name="right chevron" />
					</Button>
				</Modal.Actions>

				<Modal
					onClose={() => setSecondOpen(false)}
					open={secondOpen}
					size="medium"
					data-cy="payment-details"
				>
					<Modal.Header data-cy="header-user-email">
						<Message>{t ("LoggedInAs")} {currentUser.email}</Message>
					</Modal.Header>
					<Modal.Header>{t ("CardDetails")}</Modal.Header>
					<Modal.Content>
						<Elements stripe={stripePromise}>
							<PaymentForm data-cy="payment-form" />
						</Elements>
					</Modal.Content>
					<Modal.Actions>
						<Button
							icon="check"
							content={t ("AllDone")}
							data-cy="all-done"
							onClick={finalizePayment}
							primary
						/>
					</Modal.Actions>
				</Modal>
			</Modal>
		</>
	);
};

export default MasterModal;
