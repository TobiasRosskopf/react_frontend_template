// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import page
import User from "./User";

test("renders User", () => {
  const { getByText } = render(<User />);
  const element = getByText(/User/i);
  expect(element).toBeInTheDocument();
});
