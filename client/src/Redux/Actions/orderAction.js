import axios from "axios";

const url = "http://localhost:5000/api/v1/"

export const placeOrder = (token,totalamount) => async (dispatch,getState) => {
    try {

        dispatch({
            type: "GetOrderRequest",
        });

        const currentUser = getState().user.user;
        const cartItem = getState().cart.cartItems;

        

        const {data} = await axios.post(url + "order", { token,totalamount,currentUser,cartItem },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetOrderSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "GetOrderFailure",
            payload: error.response.data.message,
        })
    }
}