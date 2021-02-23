// Import modules
import React from "react";

// Import styles
import "./UserPage.scss";

// Import parts
import Header from "../../components/Header";
// import UserProfile from "../../components/UserProfile/UserProfile";

class UserPage extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="UserPage">
        <Header />
        <h1>Benutzerprofil:</h1>
        {/* <h2>Benutzername: {localStorage.getItem("username")}</h2>
        <h2>E-Mail: {localStorage.getItem("email")}</h2> */}
        {/* <UserProfile /> */}
      </div>
    );
  }
}

export default UserPage;
