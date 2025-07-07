import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EventHandling } from "./EventHandling";

describe("EventHandling", () => {
  it("increments count on button click", () => {
    render(<EventHandling />);

    const button = screen.getByText("Click me");
    const message = () => screen.getByText(/you clicked \d+ times/i);

    expect(message()).toHaveTextContent("You clicked 0 times");

    fireEvent.click(button);
    expect(message()).toHaveTextContent("You clicked 1 times");

    fireEvent.click(button);
    expect(message()).toHaveTextContent("You clicked 2 times");
  });
});
