// Import modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import styles
import "./App.scss";

// Import configs
import { URL_AUTH, URL_USER, URL_USERS } from "./config/urlpatterns";

// Import bootstrap components
import Container from "react-bootstrap/Container";

// Import project components
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

// Import parts
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import Error from "./pages/Error";

interface Props {}

interface State {
  displayedForm: string;
  loggedIn: boolean;
  username: string;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      displayedForm: "",
      loggedIn: localStorage.getItem("token") ? true : false,
      username: "",
    };
  }

  componentDidMount(): void {
    if (this.state.loggedIn) {
      fetch(URL_USER, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((json) => {
          this.setState({ username: json.username });
        });
    }
  }

  handleLogin = (e: React.FormEvent<HTMLFormElement>, data: {}): void => {
    e.preventDefault();
    fetch(URL_AUTH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("token", json.token);
        this.setState({
          loggedIn: true,
          displayedForm: "",
          username: json.user.username,
        });
      });
  };

  handleSignup = (e: React.FormEvent<HTMLFormElement>, data: {}): void => {
    e.preventDefault();
    fetch(URL_USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("token", json.token);
        this.setState({
          loggedIn: true,
          displayedForm: "",
          username: json.username,
        });
      });
  };

  handleLogout = (): void => {
    localStorage.removeItem("token");
    this.setState({
      loggedIn: false,
      username: "",
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

    return (
      <BrowserRouter basename="/">
        <Navigation
          loggedIn={this.state.loggedIn}
          displayForm={this.displayForm}
          handleLogout={this.handleLogout}
        />

        <Container style={{ marginTop: "20px" }}>
          <Header />
          {form}
          <h3>
            {this.state.loggedIn
              ? `Hallo, ${this.state.username}`
              : "Bitte anmelden"}
          </h3>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route component={Error} />
          </Switch>
        </Container>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
