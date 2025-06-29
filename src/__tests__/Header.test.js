import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Components/Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter, Link } from "react-router";

it("Should load Header Components with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
  expect(loginButton).toBeInTheDocument();

  const logooutButton = screen.getByRole("button", { name: "Logout" });
  expect(logooutButton).toBeInTheDocument();
});
it("Should load Header Components with a cart items ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const CartItems = screen.getByText(/Cart/); //rejux

  expect(CartItems).toBeInTheDocument();
});
