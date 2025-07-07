import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ListRendering } from "./ListRendering";

describe("ListRendering", () => {
  it("renders all items in the list", () => {
    const data = ["Apple", "Banana", "Orange"];
    render(<ListRendering items={data} />);

    data.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders empty list when no items", () => {
    render(<ListRendering items={[]} />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
