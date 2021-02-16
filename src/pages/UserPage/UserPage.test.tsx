// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import page
import UserPage from "./UserPage";

test("renders 'Benutzerprofil'", () => {
  const { getByText } = render(<UserPage />);
  const element = getByText(/Benutzerprofil/i);
  expect(element).toBeInTheDocument();
});
