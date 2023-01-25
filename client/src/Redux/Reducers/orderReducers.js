import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const orderReducer=createReducer(initialState,{

    GetOrderRequest:(state)=>{
        state.loading=true;
    },
    GetOrderSuccess:(state,action)=>{

        state.loading=false;
        state.message = action.payload;
    },
    GetOrderFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },
    
    clearMessage:(state)=>{
        state.message=null
    },
    clearError:(state)=>{
        state.error=null
    }
    
    

})