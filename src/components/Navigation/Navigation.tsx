// Import modules
import React from "react";
import { connect, ConnectedProps } from "react-redux";

// Import styles
import "./Navigation.scss";

// Import components
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

// Import redux store
import { RootState } from "../../store/store";
import { UserState } from "store/types";

// State from redux store to Props
const mapState = (state: RootState): { user: UserState } => ({
  user: state.user,
});

// Actions from redux store to Props
const mapDispatch = {
  // no actions yet
};

// Connect Props
const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

// Extend with own Props
interface Props extends PropsFromRedux {
  loggedIn: boolean;
  displayForm: (form: string) => void;
  handleLogout: (event: React.MouseEvent<HTMLLIElement>) => void;
}

class Navigation extends React.Component<Props> {
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
          title={"Angemeldet als " + this.props.user.data?.username}
          size="sm"
          menuAlign="right"
        >
          <Dropdown.Item href="user">Profil</Dropdown.Item>
          <Dropdown.Item href="settings">Einstellungen</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={this.props.handleLogout}>Abmelden</Dropdown.Item>
        </DropdownButton>
      </div>
    );

    return (
      <div className="Navigation">
        <Navbar expand="lg">
          <Navbar.Brand href="home">React App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="http://0.0.0.0:8000/admin/">Admin</Nav.Link>
            </Nav>
            {this.props.loggedIn ? loggedInNav : loggedOutNav}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

// Connect component
export default connector(Navigation);
