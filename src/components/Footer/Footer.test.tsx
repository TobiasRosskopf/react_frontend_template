// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import Footer from "./Footer";

test("renders Copyright", () => {
  render(<Footer />);
  expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});
