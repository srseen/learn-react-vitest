import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ControlledInput } from "./ControlledInput";

describe("ControlledInput", () => {
  it("should update value when typed", () => {
    render(<ControlledInput />);
    const input = screen.getByPlaceholderText("Controlled input");
    const display = screen.getByTestId("display");

    expect(display).toHaveTextContent("You typed: (empty)");

    fireEvent.change(input, { target: { value: "hello world" } });

    expect(display).toHaveTextContent("You typed: hello world");
    expect(input).toHaveValue("hello world");
  });
});
