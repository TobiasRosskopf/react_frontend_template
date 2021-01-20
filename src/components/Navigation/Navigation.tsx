// Import modules
import React from "react";

// Import styles
import "./Navigation.scss";

// Import configs
import { URL_ADMIN } from "../../config/urlpatterns";

// Import components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

interface Props {
  loggedIn: boolean;
  displayForm: (form: string) => void;
  handleLogout: (event: React.MouseEvent<HTMLLIElement>) => void;
}

interface State {}

class Navigation extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    const loggedOutNav = (
      <div>
        <Button onClick={(): void => this.props.displayForm("login")}>Anmelden</Button>
        <Button onClick={(): void => this.props.displayForm("signup")}>Registrieren</Button>
      </div>
    );

    const loggedInNav = (
      <Button onClick={this.props.handleLogout}>Abmelden</Button>
    );

    return (
      <Navbar expand="lg">
        <Navbar.Brand href="home">React App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href={URL_ADMIN}>Admin</Nav.Link>
          </Nav>
          {this.props.loggedIn ? loggedInNav : loggedOutNav}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;