// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import page
import Error from "./Error";

test("renders Error", () => {
  const { getByText } = render(<Error />);
  const element = getByText(/Error/i);
  expect(element).toBeInTheDocument();
});
