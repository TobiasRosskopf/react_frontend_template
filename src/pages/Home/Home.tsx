// Import modules
import React from "react";

// Import styles
import "./Home.scss";

// Import parts
import Header from "../../components/Header";
import UserList from "../../components/UserList";

class Home extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Header />
        <h1>Home</h1>
        <UserList />
      </div>
    );
  }
}

export default Home;
