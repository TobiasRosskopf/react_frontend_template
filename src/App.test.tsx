// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import components
import App from "./App";

test("renders 'React App'", () => {
  const { getByText } = render(<App />);
  const element = getByText(/React App/i);
  expect(element).toBeInTheDocument();
});
