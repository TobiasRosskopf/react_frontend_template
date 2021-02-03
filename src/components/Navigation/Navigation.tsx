// Import modules
import React from "react";

// Import styles
import "./Navigation.scss";

// Import components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

interface Props {
  loggedIn: boolean;
  displayForm: (form: string) => void;
  handleLogout: (event: React.MouseEvent<HTMLLIElement>) => void;
}

class Navigation extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    const loggedOutNav = (
      <div>
        <Button variant="link" onClick={(): void => this.props.displayForm("login")}>
          Anmelden
        </Button>
        <Button variant="link" onClick={(): void => this.props.displayForm("signup")}>
          Registrieren
        </Button>
      </div>
    );

    const loggedInNav = (
      <div>
        <DropdownButton
          id="dropdown-basic-button"
          title={"Angemeldet als " + localStorage.getItem("username")}
          size="sm"
          menuAlign="right"
        >
          <Dropdown.Item href="user">Profil</Dropdown.Item>
          <Dropdown.Item href="user">Profil</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={this.props.handleLogout}>Abmelden</Dropdown.Item>
        </DropdownButton>
      </div>
    );

    return (
      <Navbar expand="lg">
        <Navbar.Brand href="home">React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="http://0.0.0.0:8000/admin/">Admin</Nav.Link>
          </Nav>
          {this.props.loggedIn ? loggedInNav : loggedOutNav}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
