// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import page
import User from "./User";

test("renders 'Benutzerprofil'", () => {
  const { getByText } = render(<User />);
  const element = getByText(/Benutzerprofil/i);
  expect(element).toBeInTheDocument();
});
