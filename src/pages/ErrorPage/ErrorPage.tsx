// Import modules
import React from "react";

// Import styles
import "./ErrorPage.scss";

class ErrorPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="ErrorPage">
        <h1>Error</h1>
        <p>Diese Seite existiert nicht!</p>
      </div>
    );
  }
}

export default ErrorPage;
