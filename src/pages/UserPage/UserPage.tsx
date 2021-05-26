// Import modules
import React from "react";

// Import styles
import "./UserPage.scss";

// Import parts
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile/UserProfile";

class UserPage extends React.Component<Record<string, unknown>> {
  render(): JSX.Element {
    return (
      <div className="UserPage">
        <Header />
        <h1>Benutzerprofil:</h1>
        <UserProfile />
      </div>
    );
  }
}

export default UserPage;
