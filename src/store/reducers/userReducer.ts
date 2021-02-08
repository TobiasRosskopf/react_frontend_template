import { UserState, UserAction, GET_USER, SET_LOADING, SET_ERROR } from "../types";

const initialState: UserState = {
  data: null,
  loading: false,
  error: "",
};

export default (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case GET_USER:
      return {
        data: action.payload,
        loading: false,
        error: "",
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
