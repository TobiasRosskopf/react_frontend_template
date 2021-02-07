// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import LoginForm from "./LoginForm";

test("renders 'Benutzername'", () => {
  render(<LoginForm handleLogin={(): boolean => false} />);
  expect(screen.getByText(/Benutzername/i)).toBeInTheDocument();
});
