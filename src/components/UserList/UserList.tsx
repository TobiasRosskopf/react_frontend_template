// Import modules
import React from "react";

// Import styles
import "./UserList.scss";

// Import API
import API from "../../api";

// Import components
import Table from "react-bootstrap/Table";

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
    API.get("/api/users/")
      .then((res) => {
        const users = res.data;
        this.setState({ users });
      })
      .catch((err) => {
        alert(err);
      });
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
            <tr>
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
