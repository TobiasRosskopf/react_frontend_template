// Import modules
import React from "react";

// Import styles
import "./User.scss";

// Import parts
import Header from "../../components/Header";

class User extends React.Component {
  render(): JSX.Element {
    return (
      <div>
        <Header />
        <h1>User</h1>
      </div>
    );
  }
}

export default User;
