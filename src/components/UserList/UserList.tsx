// Import modules
import React from "react";

// Import styles
import "./UserList.scss";

// Import API
import API from "../../api";

// Import components
import Table from "react-bootstrap/Table";

interface User {
  username: string;
  email: string;
}

interface State {
  users: User[];
}

class UserList extends React.Component<{}, State> {
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
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
    );
  }
}

export default UserList;
