// Import modules
import React from "react";
import { render, screen } from "@testing-library/react";

// Import components
import UserList from "./UserList";

test("renders 'Benutzername'", () => {
  render(<UserList />);
  expect(screen.getByText(/Benutzername/i)).toBeInTheDocument();
});
