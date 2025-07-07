import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FunctionalComponent } from "./FunctionalComponent";

describe("FunctionalComponent", () => {
  it("should render the component text", () => {
    render(<FunctionalComponent />);
    expect(
      screen.getByText("This is a functional component.")
    ).toBeInTheDocument();
  });
});
