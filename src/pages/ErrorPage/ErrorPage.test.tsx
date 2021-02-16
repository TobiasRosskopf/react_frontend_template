// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import page
import ErrorPage from "./ErrorPage";

test("renders 'Error'", () => {
  const { getByText } = render(<ErrorPage />);
  const element = getByText(/Error/i);
  expect(element).toBeInTheDocument();
});
