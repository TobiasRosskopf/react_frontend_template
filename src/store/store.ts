// Import modules
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// Import reducers
import userReducer from "./reducers/userReduser";

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Create store with Thunk and DevTools-Extension
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// Export store and types
export type RootState = ReturnType<typeof rootReducer>;
export default store;
