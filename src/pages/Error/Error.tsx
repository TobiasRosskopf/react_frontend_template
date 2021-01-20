// Import modules
import React from "react";

// Import styles
import "./Error.scss";

class Error extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <h1>Error</h1>
        <p>Diese Seite existiert nicht!</p>
      </div>
    );
  }
}

export default Error;
