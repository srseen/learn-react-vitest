import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LiftingStateUp } from "./LiftingStateUp";

describe("LiftingStateUp", () => {
  it("initial count should be 0 in both components", () => {
    render(<LiftingStateUp />);
    expect(screen.getByText("Count in Control: 0")).toBeInTheDocument();
    expect(screen.getByText("Count in Display: 0")).toBeInTheDocument();
  });

  it("increments count in both Control and Display when button is clicked", () => {
    render(<LiftingStateUp />);
    const button = screen.getByText("Increment");
    fireEvent.click(button);
    fireEvent.click(button);
    expect(screen.getByText("Count in Control: 2")).toBeInTheDocument();
    expect(screen.getByText("Count in Display: 2")).toBeInTheDocument();
  });
});
