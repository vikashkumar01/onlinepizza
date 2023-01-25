
import React, { useState } from 'react'
import {useDispatch} from 'react-redux'

const Pizza = ({pizza}) => {

   const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')

    const addToCart = (_id,name,image,category,varient,quantity,price) =>{
        const option = {
          _id,
          name,
          image,
          category,
          varient,
          quantity,
          price
        }
        dispatch({type:'AddToCart',payload:option})
        dispatch({type:"CalculatePrice"})
    }

  return (
    <>
     <div className="pizzaDetails">
              <h3>{pizza.name}</h3>
              <img src={pizza.image} />

              <div className='categorysection'>
              <p>Category:</p>
              <span >{pizza.category}</span>
              </div>
              
              <div className='selectionpizza'>
                <div className='selectiontype'>
                  <label for="pizza">Choose a Varients:</label>
                  <select name="pizza" id="pizza" value={varient} onChange={(e)=>setVarient(e.target.value)}>
                    {
                      pizza.varients?.map((varient,i) => (
                        <option value={varient} key={i}>{varient}</option>
                      ))
                    }
                  </select>
                </div>

                <div className='selectiontype'>
                  <label for="pizza">How many a Pizza:</label>
                  <select name="pizza" id="pizza" value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                    {
                      [...Array(10).keys()].map((x,i)=>(
                        <option value={i+1} key={i}>{i+1}</option>
                      ))
                    }
                  </select>
                </div>
              </div>
              
              <h4>₹ {pizza.prices[0][varient]*quantity}</h4>
              <button onClick={()=>addToCart(pizza._id,pizza.name,pizza.image,pizza.category,
                varient,quantity,pizza.prices[0][varient])}>Add To Cart</button>
      </div>
    </>
  )
}

export default Pizza