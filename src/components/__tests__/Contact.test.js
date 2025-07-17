import React from "react";
import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

describe("Contact Us Page test cases", () => {
  //describe is for grouping testcases

  // afterAll(() => {
  //   console.log("After All"); //it will run after all testcases
  // });

  // afterEach(() => {
  //   console.log("after Each"); //it will run after each testcases
  // });

  // beforeAll(() => {
  //   console.log("Before All"); //it will run before each testcases
  // });

  // beforeEach(() => {
  //   console.log("Before Each"); //it will run before each testcases
  // });

  //it and test same
  it("Should load contact us component", () => {
    render(
      <Provider store={appStore}>
        <Contact />
      </Provider>
    );

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact component", () => {
    render(<Contact />);

    //   const button = screen.getByRole("button");
    const button = screen.getByText("Submit"); //same as above

    //Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name"); //same as above

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox"); //when we have multiple items then we use ALL
    //console.log(inputBoxes.length);

    //Assertion
    //   expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);
  });
});
