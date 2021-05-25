// Import modules
import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

// Import store
import store from "./store/store";

// Import components
import App from "./App";

// Test whole App component
describe("Test App component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  test("renders 'React App'", () => {
    expect(screen.getByText(/React App/i)).toBeInTheDocument();
  });

  test("renders 'Home'", () => {
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  test("renders 'Copyright'", () => {
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
