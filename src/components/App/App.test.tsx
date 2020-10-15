// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import components
import App from "./App";

test("renders App with React", () => {
  const { getByText } = render(<App />);
  const element = getByText(/App with React/i);
  expect(element).toBeInTheDocument();
});
