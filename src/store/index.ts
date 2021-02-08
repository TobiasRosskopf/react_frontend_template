// Import modules
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Import reducers
import userReducer from "./reducers/userReducer";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
