// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import components
import LoginForm from "./LoginForm";

test("renders Benutzername", () => {
  const { getByText } = render(<LoginForm />);
  const element = getByText(/Benutzername/i);
  expect(element).toBeInTheDocument();
});
