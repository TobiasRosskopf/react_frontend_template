// Import modules
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import * as serviceWorker from "serviceWorker";

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import App
import App from "./App";

// Render App to DOM
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
