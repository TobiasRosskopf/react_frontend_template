import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { UserAction, GET_USER, SET_LOADING, SET_ERROR } from "../types";

import API from "../../api";

export function getUser(): ThunkAction<void, RootState, null, UserAction> {
  return function (dispatch): void {
    dispatch({ type: SET_LOADING });
    API.get("/current_user/")
      .then((response) => {
        dispatch({
          type: GET_USER,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SET_ERROR,
          payload: error.message,
        });
      });
  };
}

// export function setLoading(): UserAction {
//   return {
//     type: SET_LOADING,
//   };
// }

// export function setError(): UserAction {
//   return {
//     type: SET_ERROR,
//     payload: "",
//   };
// }
