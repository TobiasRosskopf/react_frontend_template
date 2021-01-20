// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import Navigation from "./Navigation";

test("renders Anmelden", () => {
  render(<Navigation />);
  expect(screen.getByText(/Anmelden/i)).toBeInTheDocument();
});
