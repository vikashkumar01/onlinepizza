import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const pizzaReducer=createReducer(initialState,{

    GetAllPizzaRequest:(state)=>{
        state.loading=true;
    },
    GetAllPizzaSuccess:(state,action)=>{

        state.loading=false;
        state.pizzas = action.payload;
    },
    GetAllPizzaFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    }   

})