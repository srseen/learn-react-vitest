import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Children } from "./PropsAndChildren";

describe("PropsAndChildren", () => {
  it("renders the title prop", () => {
    render(<Children title="Hello Title">Child</Children>);
    expect(screen.getByText("Hello Title")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Children title="Title">
        <p>Child content here</p>
      </Children>
    );
    expect(screen.getByText("Child content here")).toBeInTheDocument();
  });
});
