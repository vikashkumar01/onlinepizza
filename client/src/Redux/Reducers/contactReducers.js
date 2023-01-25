import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const conatctReducer=createReducer(initialState,{

    GetContactRequest:(state)=>{
        state.loading=true;
    },
    GetContactSuccess:(state,action)=>{

        state.loading=false;
        state.message = action.payload;
    },
    GetContactFailure:(state,action)=>{ 
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