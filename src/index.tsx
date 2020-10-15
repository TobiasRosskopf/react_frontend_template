// Import modules
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "serviceWorker";

// Import styles
import "bootstrap/dist/css/bootstrap.min.css";

// Import components
import App from "components/App";

// Render App to DOM
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();
