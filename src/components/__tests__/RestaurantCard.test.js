import React from "react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted Label(HOC)", () => {
  const PromotedCard = withPromotedLabel(RestaurantCard);
  render(<PromotedCard resData={MOCK_DATA} />);

  const label = screen.getByText("Promoted");

  expect(label).toBeInTheDocument();
});
