import { ThunkAction } from "redux-thunk";
import { RootState } from "..";
import { UserAction, GET_USER, SET_LOADING, SET_ERROR } from "../types";

import API from "../../api";

export const getUser = (): ThunkAction<void, RootState, null, UserAction> => {
  return async (dispatch) => {
    API.get("/current_user/")
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        });
      })
      .catch((err) => {
        throw new Error(err.mesage);
      });
  };
};

export const setLoading = (): UserAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): UserAction => {
  return {
    type: SET_ERROR,
    payload: "",
  };
};
