import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Checkout from '../Component/Checkout'

const Cart = () => {

    const { cartItems,subTotal,shipping,tax,total } = useSelector((state) => state.cart)
    const {message,error} = useSelector((state) =>state.order)

    const dispatch = useDispatch()

    const incrHandler  = (_id) =>{
        dispatch({type:"Increment",payload:_id});
        dispatch({type:"CalculatePrice"});
    }

    const decrHandler = (_id) =>{
        dispatch({type:"Decrement",payload:_id});
        dispatch({type:"CalculatePrice"});
        
    }

    const deleteHandler = (_id) =>{
        dispatch({type:"DeleteFromCart",payload:_id});
        dispatch({type:"CalculatePrice"});
    }

    useEffect(() =>{
        if(cartItems)
        {
            dispatch({type:"CalculatePrice"});
        }

        if(message){
            alert(message);
            dispatch({type:"clearMessage"})
            dispatch({type:"RemoveFromCart"})

        }

        if(error){
            alert(error);
            dispatch({type:"clearError"})
        }
    },[dispatch,cartItems,error,message])
    

    return (
        <div className="cartContainer">
            <h3>Cart</h3>
            <div className="cart">

                <div className="item">
                    {
                        cartItems.map((x) => (
                            <div className="itemDetails">
                                <img src={x.image} />
                                <div className="description">
                                    <h3>{x.name}<span>[{x.varient}]</span></h3>
                                    <p>{x.category}</p>
                                    <h4>₹ {x.price * x.quantity}</h4>
                                </div>
                                <div className="increment">
                                    <button onClick={()=>incrHandler(x._id)}>+</button>
                                    <h5>{x.quantity}</h5>
                                    <button onClick={()=>decrHandler(x._id)}>-</button>
                                </div>
                                <button className="btn2" onClick={()=>deleteHandler(x._id)}>Delete</button>
                            </div>
                        ))
                    }


                </div>

                <div className="checkout">

                    <h3>Payment</h3>

                    <div className="checkoutDetails">
                        <h4>Price:₹{subTotal}</h4>
                        <h4>Shipping:₹{shipping}</h4>
                        <h4>Tax:₹{tax}</h4>
                        <h3>Total Amount:₹{total}</h3>
                    </div>

                    <Checkout totalamount={total}/>

                </div>
            </div>
        </div>

    )
}

export default Cart