// Declare action types
export const GET_USER = "GET_USER";
export const CLEAR_USER = "CLEAR_USER";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export interface UserData {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  last_login: Date;
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

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string;
}

export type UserAction = GetUserAction | ClearUserAction | SetLoadingAction | SetErrorAction;
