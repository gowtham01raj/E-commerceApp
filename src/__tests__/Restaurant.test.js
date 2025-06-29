import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../mocks/RestaurantCard";
import { Mock_Data } from "../mocks/resCardMock";
import { BrowserRouter, Provider, Link } from "react-router";
import appStore from "../utils/appStore";

test("Should render RestaurantCard component with Props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard {...Mock_Data.info} />
    </BrowserRouter>
  );

    const name = screen.getByText("Theobroma");
    expect(name).toBeInTheDocument();
});
