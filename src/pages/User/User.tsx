// Import modules
import React from "react";

// Import styles
import "./User.scss";

// Import parts
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile/UserProfile";

class User extends React.Component<{}, {}> {
  // userData = useSelector((state: RootState) => state.user.data);
  render(): JSX.Element {
    return (
      <div>
        <Header />
        {/* <h1>Benutzerprofil:</h1>
        <h2>Benutzername: {localStorage.getItem("username")}</h2>
        <h2>E-Mail: {localStorage.getItem("email")}</h2> */}
        <UserProfile />
      </div>
    );
  }
}

export default User;
