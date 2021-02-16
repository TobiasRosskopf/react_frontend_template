// Import modules
import React from "react";

// Import styles
import "./HomePage.scss";

// Import parts
import Header from "../../components/Header";
import UserList from "../../components/UserList";

class HomePage extends React.Component {
  render(): JSX.Element {
    return (
      <div className="HomePage">
        <Header />
        <h1>Home</h1>
        <UserList />
      </div>
    );
  }
}

export default HomePage;
