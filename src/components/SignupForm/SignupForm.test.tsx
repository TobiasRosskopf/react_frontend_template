// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import SignupForm from "./SignupForm";

test("renders Benutzername", () => {
  render(<SignupForm handleSignup={(): boolean => false} />);
  expect(screen.getByText(/Benutzername/i)).toBeInTheDocument();
});
