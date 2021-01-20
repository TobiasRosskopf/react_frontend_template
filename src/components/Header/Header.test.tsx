// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import Header from "./Header";

test("renders App with React", () => {
  render(<Header />);
  expect(screen.getByText(/App with React/i)).toBeInTheDocument();
});
