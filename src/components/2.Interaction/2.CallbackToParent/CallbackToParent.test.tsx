import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { CallbackToParent } from "./CallbackToParent";
import { Child } from "./CallbackToParent";

describe("CallbackToParent", () => {
  it("should call parent callback and show message when button is clicked", () => {
    render(<CallbackToParent />);

    const button = screen.getByText("Notify Parent");
    const message = screen.getByTestId("message");

    expect(message).toHaveTextContent("");

    fireEvent.click(button);

    expect(message).toHaveTextContent("Child has notified the parent!");
  });
});

describe("Child", () => {
  it("calls onNotify when button is clicked", () => {
    const mockCallback = vi.fn();
    render(<Child onNotify={mockCallback} />);

    fireEvent.click(screen.getByText("Notify Parent"));
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
