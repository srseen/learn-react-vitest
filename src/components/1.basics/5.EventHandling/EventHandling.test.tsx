import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { EventHandling } from "./EventHandling";

describe("EventHandling", () => {
  it("should increment count when button clicked", () => {
    render(<EventHandling />);
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(screen.getByText("You clicked 1 times")).toBeInTheDocument();
  });

  it("should show text on mouse over", () => {
    render(<EventHandling />);
    const hoverBox = screen.getByText("Hover over this box");
    fireEvent.mouseOver(hoverBox);
    expect(screen.getByText("Mouse is over the box!")).toBeInTheDocument();
    fireEvent.mouseLeave(hoverBox);
    expect(
      screen.queryByText("Mouse is over the box!")
    ).not.toBeInTheDocument();
  });

  it("should update text when typing in input", () => {
    render(<EventHandling />);
    const input = screen.getByPlaceholderText("Type something...");
    fireEvent.change(input, { target: { value: "React is great" } });
    expect(screen.getByText("You typed: React is great")).toBeInTheDocument();
  });
});
