// Import modules
import React from "react";

// Import styles
import "./SignupForm.scss";

interface Props {
  handleSignup: (event: React.FormEvent<HTMLFormElement>, state: State) => void;
}

interface State {
  username: string;
  password: string;
}

class SignupForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    } as Pick<State, keyof State>);
  };

  render(): JSX.Element {
    return (
      <form onSubmit={(e): void => this.props.handleSignup(e, this.state)}>
        <h4>Registrieren</h4>
        <label htmlFor="username">Benutzername</label>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Passwort</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default SignupForm;
