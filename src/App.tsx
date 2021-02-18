// Import modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import styles
import "./App.scss";

// Import API
import API from "./api";

// Import bootstrap components
import Container from "react-bootstrap/Container";

// Import project components
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

// Import parts
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Import pages
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

interface AppState {
  displayedForm: string;
  loggedIn: boolean;
  username: string;
}

interface SignupDataI {
  username: string;
  password: string;
  passwordConfirm: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      displayedForm: "login",
      loggedIn: localStorage.getItem("token") ? true : false,
      username: "",
    };
  }

  componentDidMount(): void {
    if (this.state.loggedIn) {
      API.get("/current_user/")
        .then((res) => this.setState({ username: res.data.username }))
        .catch((err) => alert(err));
    }
  }

  handleLogin = (e: React.FormEvent<HTMLFormElement>, data: {}): void => {
    e.preventDefault();
    API.post("/login/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        this.setState({
          loggedIn: true,
          displayedForm: "",
          username: res.data.username,
        });
      })
      .catch((err) => alert(err));
  };

  handleSignup = (e: React.FormEvent<HTMLFormElement>, data: SignupDataI): void => {
    e.preventDefault();
    if (data.password !== data.passwordConfirm) {
      alert("Passwörter stimmen nicht überein!");
    } else {
      API.post("/signup/", data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.username);
          this.setState({
            loggedIn: true,
            displayedForm: "",
            username: res.data.username,
          });
        })
        .catch((err) => alert(err));
    }
  };

  handleLogout = (): void => {
    localStorage.clear();
    this.setState({
      loggedIn: false,
      username: "",
      displayedForm: "login",
    });
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
            loggedIn={this.state.loggedIn}
            displayForm={this.displayForm}
            handleLogout={this.handleLogout}
          />

          <Container className="mt-5 mb-5">{this.state.loggedIn ? routeSwitch : form}</Container>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
