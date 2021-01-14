import React from 'react'
import { Button, Form } from 'semantic-ui-react' 
import { CardNumberElement, injectStripe, CardCVCElement, CardExpiryElement} from 'react-stripe-elements'
import axios from 'axios' 

const payWithStripe = async (stripeToken) => {
  let headers = JSON.parse(localStorage.getItem('credentials'))
  let response = await axios.post(
    '/subscriptions',
    { stripeToken: stripeToken },
    { headers: headers }
  )
  onSubscribe(response.data.paid ? response.data.message: "Whoops!")
}

const onPaymentHandler = async (e) => {
  let stripeResponse = await stripe.createToken()
  stripeResponse.token && payWithStripe(stripeResponse.token.id) 
}


