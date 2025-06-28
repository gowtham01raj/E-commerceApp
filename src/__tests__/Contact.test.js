import { render, screen } from "@testing-library/react";
import Contact from "../Components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  test("Should load contact us Components", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact components", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  it("should load 2 input name inside contact components", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
