import axios from "axios";

const url = "http://localhost:5000/api/v1/"

export const contactTo = (name, email, message) => async (dispatch) => {
    try {

        dispatch({
            type: "GetContactRequest",
        });

        const { data } = await axios.post(url + "contact", { name, email, message },
            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,

            }

        );

        console.log(data)

        dispatch({
            type: "GetContactSuccess",
            payload: data,

        });
    }
    catch (error) {
        dispatch({
            type: "GetContactFailure",
            payload: error.response.data.message
        })
    }
}