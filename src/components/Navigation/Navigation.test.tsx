// Import modules
import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

// Import store
import store from "../../store/store";

// Import components
import Navigation from "./Navigation";

// Test logged out Navigation component
describe("Test logged out Navigation component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Navigation
          loggedIn={false}
          displayForm={(): string => "login"}
          handleLogout={(): boolean => false}
        />
      </Provider>
    );
  });

  test("renders 'Anmelden'", () => {
    expect(screen.getByText(/Anmelden/i)).toBeInTheDocument();
  });

  test("renders 'Registrieren'", () => {
    expect(screen.getByText(/Registrieren/i)).toBeInTheDocument();
  });
});

// Test logged in Navigation component
describe("Test logged in Navigation component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Navigation
          loggedIn={true}
          displayForm={(): string => "login"}
          handleLogout={(): boolean => false}
        />
      </Provider>
    );
  });

  test("renders 'Angemeldet als'", () => {
    expect(screen.getByText(/Angemeldet als/i)).toBeInTheDocument();
  });
});
