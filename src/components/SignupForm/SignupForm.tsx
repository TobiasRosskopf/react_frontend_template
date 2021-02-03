// Import modules
import React from "react";

// Import styles
import "./SignupForm.scss";

// Import components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface Props {
  handleSignup: (event: React.FormEvent<HTMLFormElement>, state: State) => void;
}

interface State {
  username: string;
  password: string;
  passwordConfirm: string;
}

class SignupForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      passwordConfirm: "",
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
      <Form onSubmit={(e): void => this.props.handleSignup(e, this.state)}>
        <h1>Registrieren</h1>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Benutzername:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Passwort:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPasswordConfirm">
          <Form.Label>Passwort bestätigen:</Form.Label>
          <Form.Control
            type="password"
            name="passwordConfirm"
            value={this.state.passwordConfirm}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" size="lg" className="mt-3" type="submit">
          Registrieren
        </Button>
      </Form>
    );
  }
}

export default SignupForm;
