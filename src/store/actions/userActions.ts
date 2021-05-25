// Import modules
import { ThunkAction } from "redux-thunk";

// Import store and types
import { RootState } from "../store";
import { UserAction, GET_USER, CLEAR_USER, SET_LOADING, SET_ERROR } from "../types";

// Import axios API
import API from "../../api";

// Get User Action
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

// Clear User Action
export function clearUser(): ThunkAction<void, RootState, null, UserAction> {
  return function (dispatch): void {
    dispatch({
      type: CLEAR_USER,
    });
  };
}
