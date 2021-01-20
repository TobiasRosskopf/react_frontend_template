// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import components
import Navigation from "./Navigation";

test("renders Anmelden", () => {
  const { getByText } = render(<Navigation />);
  const element = getByText(/Anmelden/i);
  expect(element).toBeInTheDocument();
});
