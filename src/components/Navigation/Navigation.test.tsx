// Import modules
import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

// Import store
import store from "../../store/store";

// Import components
import Navigation from "./Navigation";

test("renders 'Anmelden'", () => {
  render(
    <Provider store={store}>
      <Navigation
        loggedIn={false}
        displayForm={(): string => "login"}
        handleLogout={(): boolean => false}
      />
    </Provider>
  );
  expect(screen.getByText(/Anmelden/i)).toBeInTheDocument();
});

test("renders 'Angemeldet als'", () => {
  render(
    <Provider store={store}>
      <Navigation
        loggedIn={true}
        displayForm={(): string => "login"}
        handleLogout={(): boolean => false}
      />
    </Provider>
  );
  expect(screen.getByText(/Angemeldet als/i)).toBeInTheDocument();
});
