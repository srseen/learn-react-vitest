import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ComponentComposition } from "./ComponentComposition";

describe("ComponentComposition", () => {
  it("renders layout with header, footer and children content", () => {
    render(<ComponentComposition />);
    expect(screen.getByText("My App Header")).toBeInTheDocument();
    expect(
      screen.getByText(
        "This content is passed as children into the Layout component."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("© 2025 My App")).toBeInTheDocument();
  });
});
