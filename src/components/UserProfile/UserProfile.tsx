// Import modules
import React from "react";
import { connect, ConnectedProps } from "react-redux";

// Import styles
import "./UserProfile.scss";

// Import Bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
type Props = ConnectedProps<typeof connector>;

class UserProfile extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): JSX.Element {
    return (
      <div className="UserProfile">
        <Form>
          <Form.Group controlId="formBasicId">
            <Form.Label>ID:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              autoComplete="username"
              value={this.props.user.data?.id}
              disabled
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Benutzername:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              autoComplete="username"
              value={this.props.user.data?.username}
              disabled
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>Vorname:</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              autoComplete="first_name"
              value={this.props.user.data?.first_name}
              disabled
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicLastName">
            <Form.Label>Nachname:</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              autoComplete="last_name"
              value={this.props.user.data?.last_name}
              disabled
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-Mail:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              autoComplete="email"
              value={this.props.user.data?.email}
              disabled
              // onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" size="lg" className="mt-3" type="submit" disabled>
            Aktualisieren
          </Button>
        </Form>
      </div>
    );
  }
}

// Connect component
export default connector(UserProfile);
