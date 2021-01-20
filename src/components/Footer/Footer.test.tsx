// Import modules
import React from "react";
import { render } from "@testing-library/react";

// Import components
import Footer from "./Footer";

test("renders Copyright", () => {
  const { getByText } = render(<Footer />);
  const element = getByText(/Copyright/i);
  expect(element).toBeInTheDocument();
});
