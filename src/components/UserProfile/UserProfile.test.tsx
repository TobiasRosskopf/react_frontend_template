// Import modules
import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

// Import store
import store from "../../store/store";

// Import components
import UserProfile from "./UserProfile";

// Test UserProfile component
describe("Test UserProfile component", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <UserProfile />
      </Provider>
    );
  });

  test("renders 'Aktualisieren'", () => {
    expect(screen.getByText(/Aktualisieren/i)).toBeInTheDocument();
  });
});
