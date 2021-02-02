// Import modules
import React from "react";

// Import styles
import "./User.scss";

// Import parts
import Header from "../../components/Header";

class User extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div>
        <Header />
        <h1>Benutzerprofil:</h1>
        <h2>Name: {localStorage.getItem("username")}</h2>
        <h2>E-Mail: {localStorage.getItem("email")}</h2>
      </div>
    );
  }
}

export default User;
