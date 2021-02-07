// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import Navigation from "./Navigation";

test("renders 'Anmelden'", () => {
  render(
    <Navigation
      loggedIn={false}
      displayForm={(): string => "login"}
      handleLogout={(): boolean => false}
    />
  );
  expect(screen.getByText(/Anmelden/i)).toBeInTheDocument();
});

test("renders 'Angemeldet als'", () => {
  render(
    <Navigation
      loggedIn={true}
      displayForm={(): string => "login"}
      handleLogout={(): boolean => false}
    />
  );
  expect(screen.getByText(/Angemeldet als/i)).toBeInTheDocument();
});
