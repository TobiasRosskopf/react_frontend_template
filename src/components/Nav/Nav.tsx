// Import modules
import React from "react";

// Import styles
import "./Nac.scss";

type NavProps = {
  logged_in: boolean;
  display_form: (form: string) => void;
  handle_logout: (event: React.MouseEvent<HTMLLIElement>) => void;
};

class Nav extends React.Component<NavProps> {
  constructor(props: NavProps) {
    super(props);
  }

  render(): JSX.Element {
    const logged_out_nav = (
      <ul>
        <li onClick={() => this.props.display_form("login")}>login</li>
        <li onClick={() => this.props.display_form("signup")}>signup</li>
      </ul>
    );

    const logged_in_nav = (
      <ul>
        <li onClick={this.props.handle_logout}>logout</li>
      </ul>
    );

    return <div>{this.props.logged_in ? logged_in_nav : logged_out_nav}</div>;
  }
}

export default Nav;
