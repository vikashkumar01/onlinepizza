import axios from "axios";
const url = "http://localhost:5000/api/v1/"


export const loginUser = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: "LoginRequest",
        });

        const {data} = await axios.post(url+"login", { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },

                withCredentials: true,

            }

        );

        dispatch({
            type: "LoginSuccess",
            payload: data,

        });
    }
    catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.response.data.message
        })
    }
}

export const registerUser = (username, email, password) => async (dispatch) => {
    try {

        dispatch({
            type: "RegisterRequest",
        });

        const { data } = await axios.post(url+"register", { username, email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },

            }

        );

        dispatch({
            type: "RegisterSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "RegisterFailure",
            payload: error.response.data.message
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LogoutUserRequest",
      });
  
      await axios.get(url+"user/logout",{withCredentials:true});
  
      dispatch({
        type: "LogoutUserSuccess",
      });
    } catch (error) {
      dispatch({
        type: "LogoutUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const getUser = () => async (dispatch) => {
    try {

        dispatch({
            type: "LoadUserRequest",
        });

        const { data } = await axios.get(url+"user/getUser",{withCredentials:true});

        dispatch({
            type: "LoadUserSuccess",
            payload: data,

        });
    }
    catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.message,
        })
    }
}

