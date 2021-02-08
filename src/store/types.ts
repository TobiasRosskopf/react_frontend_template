export const GET_USER = "GET_USER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface UserData {
  username: string;
  email: string;
}

export interface UserError {
  detail: string;
}

export interface UserState {
  data: UserData | null;
  loading: boolean;
  error: string;
}

interface GetUserAction {
  type: typeof GET_USER;
  payload: UserData;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type UserAction = GetUserAction | SetLoadingAction | SetErrorAction;
