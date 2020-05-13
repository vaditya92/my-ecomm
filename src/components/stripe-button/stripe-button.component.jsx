import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_8SrH0fsJKeaJTeRN7Whl25wr00Qm3lJN0H';

  const onToken = token => console.log(token)

  return (
    <StripeCheckout 
      label="Pay Now"
      name="My Ecomm"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;