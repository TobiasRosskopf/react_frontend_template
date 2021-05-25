// Import modules
import React from "react";
import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";

// Import store
import store from "./store/store";

// Import components
import App from "./App";

test("renders 'React App'", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(screen.getByText(/React App/i)).toBeInTheDocument();
});
