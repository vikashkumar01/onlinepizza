import { createReducer } from '@reduxjs/toolkit'

const initialState = {}


export const userReducer = createReducer(initialState, {

    LoginRequest: (state) => {
        state.loading = true;
    },
    LoginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.message = action.payload.message
    },
    LoginFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    RegisterRequest: (state) => {
        state.loading = true;
    },
    RegisterSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    RegisterFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    LoadUserRequest: (state) => {
        state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    LoadUserfailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
    },

    LogoutUserRequest: (state) => {
        state.loading = true;
    },
    LogoutUserSuccess: (state) => {
        state.loading = false;
        state.user = null;
        state.isAuthenticated = false;
    },
    LogoutUserFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
    },

    clearError: (state) => {
        state.error = null;
    },

    clearMessage:(state)=>{
        state.message = null;
    }


});