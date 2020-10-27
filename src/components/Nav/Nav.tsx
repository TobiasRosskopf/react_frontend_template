// Import modules
import React from "react";

// Import styles
import "./Nav.scss";

interface Props {
  loggedIn: boolean;
  displayForm: (form: string) => void;
  handleLogout: (event: React.MouseEvent<HTMLLIElement>) => void;
}

interface State {}

class Nav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    const loggedOutNav = (
      <ul>
        <li onClick={(): void => this.props.displayForm("login")}>Anmelden</li>
        <li onClick={(): void => this.props.displayForm("signup")}>Registrieren</li>
      </ul>
    );

    const loggedInNav = (
      <ul>
        <li onClick={this.props.handleLogout}>logout</li>
      </ul>
    );

    return <div>{this.props.loggedIn ? loggedInNav : loggedOutNav}</div>;
  }
}

export default Nav;
