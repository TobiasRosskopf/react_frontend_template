// Import modules
import React from "react";

// Import styles
import "./UserList.scss";

// Import API
import API from "../../api";

interface Props {}

interface User {
  username: string;
  email: string;
}

interface State {
  users: User[];
}

class UserList extends React.Component<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount(): void {
    API.get("/users")
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((err) => {
        alert(err);
      });
  }

  render(): JSX.Element {
    console.log(this.state.users);
    return (
      <ul>
        {this.state.users.map((user) => (
          <li key={user.username}>
            {user.username} - {user.email}
          </li>
        ))}
      </ul>
    );
  }
}

export default UserList;
