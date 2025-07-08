import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UseReducerCounter } from "./UseReducerCounter";

describe("UseReducerCounter", () => {
  it("should render initial count", () => {
    render(<UseReducerCounter />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });

  it("should increment the count", () => {
    render(<UseReducerCounter />);
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });

  it("should decrement the count", () => {
    render(<UseReducerCounter />);
    fireEvent.click(screen.getByText("-"));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: -1");
  });

  it("should reset the count", () => {
    render(<UseReducerCounter />);
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");
  });
});
