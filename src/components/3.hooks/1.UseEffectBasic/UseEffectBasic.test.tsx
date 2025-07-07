import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UseEffectBasic } from "./UseEffectBasic";

describe("UseEffectBasic", () => {
  it("logs effect when count changes", () => {
    render(<UseEffectBasic />);
    const button = screen.getByText("Increment");

    fireEvent.click(button);
    fireEvent.click(button);

    const logLines = screen.getAllByTestId("log-line");
    expect(logLines).toHaveLength(3); // render (count=0), count=1, count=2
    expect(logLines[2]).toHaveTextContent("count = 2");
  });
});
