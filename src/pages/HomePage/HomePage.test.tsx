// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import page
import HomePage from "./HomePage";

test("renders 'Home'", () => {
  const { getByText } = render(<HomePage />);
  const element = getByText(/Home/i);
  expect(element).toBeInTheDocument();
});
