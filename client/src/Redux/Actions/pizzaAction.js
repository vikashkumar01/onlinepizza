import axios from "axios";

const url = "http://localhost:5000/api/v1/"

export const getAllPizza = () => async (dispatch) => {
    try {

        dispatch({
            type: "GetAllPizzaRequest",
        });

        const {data} = await axios.get(url+"getpizzas",{

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

export const filterPizza = (searchkey) => async (dispatch) => {
    try {

        var filterPizzas

        dispatch({
            type: "GetAllPizzaRequest",
        });

        const {data} = await axios.get(url+"getpizzas",{

                withCredentials: true,

            }

        );


        filterPizzas = data.filter(pizza=>pizza.name.toLowerCase().includes(searchkey.toLowerCase()))
       


        dispatch({
            type: "GetAllPizzaSuccess",
            payload: filterPizzas

        });
    }
    catch (error) {
        dispatch({
            type: "GetAllPizzaFailure",
            payload: error.response.data.message
        })
    }
}

export const filterPizzaByCategory = (category) => async (dispatch) => {
    try {

        var filterPizzas

        dispatch({
            type: "GetAllPizzaRequest",
        });

        const {data} = await axios.get(url+"getpizzas",{

                withCredentials: true,

            }

        );


        filterPizzas = data.filter(pizza=>pizza.category.toLowerCase()===category.toLowerCase())
       


        dispatch({
            type: "GetAllPizzaSuccess",
            payload: filterPizzas

        });
    }
    catch (error) {
        dispatch({
            type: "GetAllPizzaFailure",
            payload: error.response.data.message
        })
    }
}