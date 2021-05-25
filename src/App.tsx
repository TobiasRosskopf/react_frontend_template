// Import modules
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import styles
import "./App.scss";

// Import API
import API from "./api";
import { isLoggedIn, setAuthTokens, clearAuthTokens } from "axios-jwt";

// Import bootstrap components
import Container from "react-bootstrap/Container";

// Import project components
import LoginForm from "./components/LoginForm";
import { LoginFormState } from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

// Import parts
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Import pages
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

// Import redux store and actions
import { RootState } from "./store/store";
import { getUser, clearUser } from "./store/actions/userActions";

interface AppState {
  displayedForm: string;
}

interface SignupDataI {
  username: string;
  password: string;
  passwordConfirm: string;
}

// State from redux store to Props
const mapState = (state: RootState): Record<string, unknown> => ({
  user: state.user,
});

// Actions from redux store to Props
const mapDispatch = {
  getUser: getUser,
  clearUser: clearUser,
};

// Connect Props
const connector = connect(mapState, mapDispatch);
type Props = ConnectedProps<typeof connector>;

class App extends React.Component<Props, AppState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayedForm: "login",
    };
  }

  componentDidMount(): void {
    if (isLoggedIn()) {
      this.props.getUser();
    }
  }

  handleLogin = (e: React.FormEvent<HTMLFormElement>, data: LoginFormState): void => {
    e.preventDefault();
    API.post("/token/", data)
      .then((response) => {
        setAuthTokens({
          accessToken: response.data.access,
          refreshToken: response.data.refresh,
        });
        this.setState({
          displayedForm: "",
        });
        this.props.getUser();
      })
      .catch((error) => console.log(error.message));
  };

  handleSignup = (e: React.FormEvent<HTMLFormElement>, data: SignupDataI): void => {
    e.preventDefault();
    if (data.password !== data.passwordConfirm) {
      alert("Passwörter stimmen nicht überein!");
    } else {
      API.post("/register/", data)
        .then((response) => {
          this.setState({
            displayedForm: "login",
          });
          alert("Erfolreich registriert!");
        })
        .catch((error) => alert(error.response.data.username));
    }
  };

  handleLogout = (): void => {
    clearAuthTokens();
    this.setState({
      displayedForm: "login",
    });
    this.props.clearUser();
  };

  displayForm = (form: string): void => {
    this.setState({
      displayedForm: form,
    });
  };

  render(): JSX.Element {
    let form;
    switch (this.state.displayedForm) {
      case "login":
        form = <LoginForm handleLogin={this.handleLogin} />;
        break;
      case "signup":
        form = <SignupForm handleSignup={this.handleSignup} />;
        break;
      default:
        form = null;
    }

    const routeSwitch = (
      <Switch>
        <Route exact path={["/", "/home"]} component={HomePage} />
        <Route exact path={["/user"]} component={UserPage} />
        <Route component={ErrorPage} />
      </Switch>
    );

    return (
      <div className="App">
        <BrowserRouter basename="/">
          <Navigation
            loggedIn={isLoggedIn()}
            displayForm={this.displayForm}
            handleLogout={this.handleLogout}
          />

          <Container className="mt-5 mb-5">{isLoggedIn() ? routeSwitch : form}</Container>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

// Connect component
export default connector(App);
