// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import UserList from "./UserList";

test("renders 'Username'", () => {
  render(<UserList />);
  expect(screen.getByText(/Username/i)).toBeInTheDocument();
});
