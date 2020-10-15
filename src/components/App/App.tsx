// Import modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Import styles
import "./App.scss";

// Import components
import { Container } from "reactstrap";
import Header from "../Header";
import Home from "../Home";
import Footer from "../Footer";

// Import pages
import Error from "../Error";

class App extends React.Component {
  render(): JSX.Element {
    return (
      <Container style={{ marginTop: "20px" }}>
        <BrowserRouter basename="/">
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
