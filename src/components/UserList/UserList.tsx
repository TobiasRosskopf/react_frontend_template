// Import modules
import React from "react";

// Import styles
import "./UserList.scss";

// Import API
import API from "../../api";

// Import components
import Table from "react-bootstrap/Table";

interface UserI {
  username: string;
  email: string;
}

interface UserListState {
  users: UserI[];
}

class UserList extends React.Component<{}, UserListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount(): void {
    API.get("/users/")
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => alert(err));
  }

  render(): JSX.Element {
    return (
      <div className="UserList">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Benutzername</th>
              <th>E-Mail</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserList;
