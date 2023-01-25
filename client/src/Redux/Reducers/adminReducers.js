import { createReducer } from "@reduxjs/toolkit";

const initialState = {}

export const getAllAdminReducer=createReducer(initialState,{

    GetAllUserRequest:(state)=>{
        state.loading=true;
    },
    GetAllUserSuccess:(state,action)=>{
        state.loading=false;
        state.alluser = action.payload;
    },
    GetAllUserFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetDeleteUserRequest:(state)=>{
        state.loading=true;
    },
    GetDeleteUserSuccess:(state,action)=>{
        state.loading=false;
        state.message = action.payload;
    },
    GetDeleteUserFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


   GetChangeStatusUserRequest:(state)=>{
        state.loading=true;
    },
    GetChangeStatusUserSuccess:(state,action)=>{
        state.loading=false;
        state.message = action.payload;
    },
   GetChangeUserStatusFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetAllOrdersRequest:(state)=>{
        state.loading=true;
    },
    GetAllOrdersSuccess:(state,action)=>{
        state.loading=false;
        state.allorders = action.payload;
    },
   GetAllOrdersFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetDeliveredOrderRequest:(state)=>{
        state.loading=true;
    },
    GetDeliveredOrderSuccess:(state,action)=>{
        state.loading=false;
        state.allorders = action.payload;
    },
   GetDeliveredOrderFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetAllPizzaRequest:(state)=>{
        state.loading=true;
    },
    GetAllPizzaSuccess:(state,action)=>{
        state.loading=false;
        state.allpizzas = action.payload;
    },
   GetAllPizzaFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetDeletePizzaRequest:(state)=>{
        state.loading=true;
    },
    GetDeletePizzaSuccess:(state,action)=>{
        state.loading=false;
        state.message = action.payload;
    },
   GetDeletePizzaFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetAddNewPizzaRequest:(state)=>{
        state.loading=true;
    },
    GetAddNewPizzaSuccess:(state,action)=>{
        state.loading=false;
        state.message = action.payload;
    },
   GetAddNewPizzaFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetPizzaByIdRequest:(state)=>{
        state.loading=true;
    },
    GetPizzaByIdSuccess:(state,action)=>{
        state.loading=false;
        state.pizza = action.payload;
    },
   GetPizzaByIdFailure:(state,action)=>{ 
        state.loading=false;
        state.error=action.payload;
    },


    GetUpdatePizzaRequest:(state)=>{
        state.loading=true;
    },
    GetUpdatePizzaSuccess:(state,action)=>{
        state.loading=false;
        state.message = action.payload;
    },
   GetUpdatePizzaFailure:(state,action)=>{ 
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