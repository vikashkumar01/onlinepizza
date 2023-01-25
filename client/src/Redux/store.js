import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./Reducers/userReducers";
import { pizzaReducer } from "./Reducers/pizzaReducers";
import { conatctReducer } from "./Reducers/contactReducers";
import { cartReducer } from "./Reducers/cartReducers";
import {orderReducer} from "./Reducers/orderReducers";
import { getAllAdminReducer} from "./Reducers/adminReducers";


const store = configureStore({
    reducer: {
        user:userReducer,
        pizzas:pizzaReducer,
        contact:conatctReducer,
        cart:cartReducer,
        order:orderReducer,
        admin:getAllAdminReducer,
    },
})

export default store;