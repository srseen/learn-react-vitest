import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UseState } from "./UseState";

describe("UseStateAdvanced", () => {
  it("updates name input", () => {
    render(<UseState />);
    const input = screen.getByLabelText("Name:");
    fireEvent.change(input, { target: { value: "John" } });
    expect(screen.getByText("Hello, John")).toBeInTheDocument();
  });

  it("increments and decrements counter", () => {
    render(<UseState />);
    const plus = screen.getByText("+");
    const minus = screen.getByText("-");
    fireEvent.click(plus);
    fireEvent.click(plus);
    fireEvent.click(minus);
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("updates first and last name", () => {
    render(<UseState />);
    const first = screen.getByLabelText("First Name:");
    const last = screen.getByLabelText("Last Name:");
    fireEvent.change(first, { target: { value: "Alice" } });
    fireEvent.change(last, { target: { value: "Smith" } });
    expect(screen.getByText("Full Name: Alice Smith")).toBeInTheDocument();
  });

  it("adds items to list", () => {
    render(<UseState />);
    const addButton = screen.getByText("Add Item");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("resets all state", () => {
    render(<UseState />);
    fireEvent.click(screen.getByText("Add Item"));
    const nameInput = screen.getByLabelText("Name:");
    fireEvent.change(nameInput, { target: { value: "Test" } });
    fireEvent.click(screen.getByText("Reset All"));
    expect(screen.getByText("Hello, ...")).toBeInTheDocument();
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });
});
