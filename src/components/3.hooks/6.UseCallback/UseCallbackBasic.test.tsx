import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import { UseCallbackBasic } from "./UseCallbackBasic";

test("increments count and child button renders once", () => {
  render(<UseCallbackBasic />);

  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByTestId("counter")).toHaveTextContent("Count: 1");

  fireEvent.click(button);
  expect(screen.getByTestId("counter")).toHaveTextContent("Count: 2");
});
