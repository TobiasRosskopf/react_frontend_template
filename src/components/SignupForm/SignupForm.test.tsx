// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import components
import SignupForm from "./SignupForm";

test("renders Benutzername", () => {
  const { getByText } = render(<SignupForm />);
  const element = getByText(/Benutzername/i);
  expect(element).toBeInTheDocument();
});
