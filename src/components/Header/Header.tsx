// Import modules
import React from "react";

// Import styles
import "./Header.scss";

// Import components
import Jumbotron from "react-bootstrap/Jumbotron";

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <div className="Header">
        <header className="text-center">
          <Jumbotron>
            <h1>App with React + Django</h1>
          </Jumbotron>
        </header>
      </div>
    );
  }
}

export default Header;
