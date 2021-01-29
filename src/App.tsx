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
import Home from "./pages/Home";
import User from "./pages/User";
import Error from "./pages/Error";

interface Props {}

interface State {
  displayedForm: string;
  loggedIn: boolean;
  username: string;
}

interface Data {
  username: string;
  password: string;
  passwordConfirm: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayedForm: "login",
      loggedIn: localStorage.getItem("token") ? true : false,
      username: "",
    };
  }

  componentDidMount(): void {
    if (this.state.loggedIn) {
      API.get("/api/current_user/")
        .then((res) => {
          const { username } = res.data;
          this.setState({ username });
        })
        .catch((err) => {
          alert(err);
        });
    }
  }

  handleLogin = (e: React.FormEvent<HTMLFormElement>, data: {}): void => {
    e.preventDefault();
    API.post("/token-auth/", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.username);
        this.setState({
          loggedIn: true,
          displayedForm: "",
          username: res.data.user.username,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };

  handleSignup = (e: React.FormEvent<HTMLFormElement>, data: Data): void => {
    e.preventDefault();
    if (data.password !== data.passwordConfirm) {
      alert("Passwörter stimmen nicht überein!");
    } else {
      API.post("/api/users/", data)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.username);
          this.setState({
            loggedIn: true,
            displayedForm: "",
            username: res.data.username,
          });
        })
        .catch((err) => {
          alert(err);
        });
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
        <Route path="/" component={Home} exact />
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route component={Error} />
      </Switch>
    );

    return (
      <BrowserRouter basename="/">
        <Navigation
          loggedIn={this.state.loggedIn}
          username={this.state.username}
          displayForm={this.displayForm}
          handleLogout={this.handleLogout}
        />

        <Container className="mt-5 mb-5">
          {this.state.loggedIn ? routeSwitch : form}
        </Container>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
