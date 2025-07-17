import React from "react";
import { fireEvent, render, screen, act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Headers from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Headers />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Burger King");
  fireEvent.click(accordianHeader);

  // console.log(screen.getAllByTestId("foodItems"));
  // expect(screen.getAllByTestId("foodItems").length).toBe(4);

  // const addBtns = screen.getAllByRole("button", { name: "Add+" });
  // fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart - (0 items)")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(
    screen.getByText("Cart is empty. Add items in the Cart").toBeInTheDocument()
  );
});
