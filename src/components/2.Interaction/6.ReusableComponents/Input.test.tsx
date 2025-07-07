import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("renders and updates value", () => {
    render(<Input placeholder="type here" />);
    const input = screen.getByPlaceholderText("type here");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(input).toHaveValue("Hello");
  });
});
