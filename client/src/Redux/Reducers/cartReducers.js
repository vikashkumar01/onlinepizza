import { createReducer } from "@reduxjs/toolkit";
 

export const cartReducer=createReducer({
    cartItems:localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],
    subTotal:0,
    shipping:0,
    tax:0,
    total:0,

},{

    
    AddToCart:(state,action)=>{
       
        const item = action.payload;
        const isItemExist = state.cartItems.find((i)=>i._id === item._id)

        if(isItemExist) {
          state.cartItems = state.cartItems.map((i)=>(i._id === item._id?item:i))
        }
        else{
            state.cartItems.push(item);
        }

        localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
        
    },

    Increment:(state,action)=>{

        const item = state.cartItems.find((i)=>i._id === action.payload)

        if(item) {
            state.cartItems.forEach((i)=>{
                
                if(i._id === item._id) {
                    
                    i.quantity++
                    
                }
            })
        }

        localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
               
    },

    Decrement:(state,action)=>{

        const item = state.cartItems.find((i)=>i._id === action.payload)

        if(item) {
            if(item.quantity > 1) {

                state.cartItems.forEach((i)=>{
                
                    if(i._id === item._id) {
                        
                        i.quantity--
                        
                    }
                })

            }
           
        }

        localStorage.setItem('cartItems',JSON.stringify(state.cartItems));
               
    },

    DeleteFromCart:(state,action)=>{

        state.cartItems = state.cartItems.filter((i)=>i._id !== action.payload)
        localStorage.setItem('cartItems',JSON.stringify(state.cartItems));

    },

    CalculatePrice:(state)=>{
        let sum=0;

        state.cartItems.forEach((i)=>(sum = sum + i.price*i.quantity))
        state.subTotal = sum
        state.shipping=state.subTotal<500?state.subTotal===0?0:50:0
        state.tax = +(state.subTotal*0.12).toFixed()
        state.total=(state.subTotal + state.shipping + state.tax)=== 50?0:(state.subTotal + state.shipping + state.tax)
        
    },

    RemoveFromCart:(state)=>{
         
        state.cartItems = []
        localStorage.setItem('cartItems',JSON.stringify(state.cartItems));

    },
    
    
   
    
    

})