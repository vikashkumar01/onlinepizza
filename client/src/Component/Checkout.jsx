import React from 'react'
import StripeCheckout from 'react-stripe-checkout' 
import {useDispatch} from 'react-redux'
import { placeOrder } from '../Redux/Actions/orderAction'

const Checkout = ({totalamount}) => {
   
  const dispatch = useDispatch()

  function tokenHandler(token){
      dispatch(placeOrder(token, totalamount))
  }

  return (
    <div style={{
      'width':'100%',
    }}>
      <StripeCheckout
        amount={totalamount*100}
        shippingAddress
        token={tokenHandler}
        stripeKey='Enter your stripe Key'
        currency='INR'
      >
        <button className='pay'>pay</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout