import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { UserAction, GET_USER, SET_LOADING, SET_ERROR } from "../types";

import API from "../../api";

export function getUser(): ThunkAction<void, RootState, null, UserAction> {
  return function (dispatch): void {
    API.get("/current_user/")
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        // console.log(err.message);
        dispatch({
          type: SET_ERROR,
          payload: err.message,
        });
      });
  };
}

export function setLoading(): UserAction {
  return {
    type: SET_LOADING,
  };
}

export function setError(): UserAction {
  return {
    type: SET_ERROR,
    payload: "",
  };
}
