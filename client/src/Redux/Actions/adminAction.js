import axios from "axios";

const url = "http://localhost:5000/api/v1/"

export const getAllUser = () => async (dispatch) => {
    try {

        dispatch({
            type: "GetAllUserRequest",
        });

        const { data } = await axios.get(url + "/admin/allusers",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetAllUserSuccess",
            payload: data.users,

        });
    }
    catch (error) {
        dispatch({
            type: "GetAllUserFailure",
            payload: error.response.data.message
        })
    }
}

export const deleteUser = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "GetDeleteUserRequest",
        });

        const { data } = await axios.delete(url + "admin/allusers/"+id,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetDeleteUserSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "GetDeleteFailure",
            payload: error.response.data.message
        })
    }
}

export const changeStatusUser = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "GetChangeStatusUserRequest",
        });

        const { data } = await axios.post(url + "admin/statususers/"+id,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetChangeStatusUserSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "GetChangeUserStatusFailure",
            payload: error.response.data.message
        })
    }
}

export const getAllOrders = () => async (dispatch) => {
    try {

        dispatch({
            type: "GetAllOrdersRequest",
        });

        const { data } = await axios.get(url + "/admin/allorderdetails",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetAllOrdersSuccess",
            payload: data.allorder,

        });
    }
    catch (error) {
        dispatch({
            type: "GetAllOrdersFailure",
            payload: error.response.data.message
        })
    }
}

export const deliveredOrder = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "GetDeliveredOrderRequest",
        });

        const { data } = await axios.post(url + "/admin/delivered/"+id,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetDeliveredOrderSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "GetDeliveredOrderFailure",
            payload: error.response.data.message
        })
    }
}

export const getAllPizza = () => async (dispatch) => {
    try {

        dispatch({
            type: "GetAllPizzaRequest",
        });

        const { data } = await axios.get(url + "admin/getpizzas",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetAllPizzaSuccess",
            payload: data,

        });
    }
    catch (error) {
        dispatch({
            type: "GetAllPizzaFailure",
            payload: error.response.data.message
        })
    }
}

export const deletePizzaById = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "GetDeletePizzaRequest",
        });

        const { data } = await axios.delete(url + "admin/deletepizzas/"+id,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetDeletePizzaSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "GetDeletePizzaFailure",
            payload: error.response.data.message
        })
    }
}

export const addNewPizza = (pizza) => async (dispatch) => {
    try {

        dispatch({
            type: "GetAddNewPizzaRequest",
        });

        const { data } = await axios.post(url + "/admin/addpizza",pizza,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetAddNewPizzaSuccess",
            payload: data,

        });
    }
    catch (error) {
        dispatch({
            type: "GetAddNewPizzaFailure",
            payload: error.response.data.message
        })
    }
}


export const getPizzaById = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "GetPizzaByIdRequest",
        });

        const { data } = await axios.get(url + "admin/pizzabyid/"+id,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetPizzaByIdSuccess",
            payload: data.p,

        });
    }
    catch (error) {
        dispatch({
            type: "GetPizzaByIdFailure",
            payload: error.response.data.message
        })
    }
}

export const updatePizza = (pizza,id) => async (dispatch) => {
    try {

        dispatch({
            type: "GetUpdatePizzaRequest",
        });

        const { data } = await axios.put(url + "admin/editpizzas/"+id,pizza,
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        dispatch({
            type: "GetUpdatePizzaSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "GetUpdatePizzaFailure",
            payload: error.response.data.message
        })
    }
}