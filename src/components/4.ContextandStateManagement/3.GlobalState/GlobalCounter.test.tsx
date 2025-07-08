import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GlobalCounterPage } from "./GlobalCounterPage";

describe("GlobalCounterPage", () => {
  it("increments, decrements, and resets the counter", () => {
    render(<GlobalCounterPage />);

    const count = () => screen.getByTestId("global-count");

    expect(count()).toHaveTextContent("Count: 0");

    fireEvent.click(screen.getByText("+"));
    expect(count()).toHaveTextContent("Count: 1");

    fireEvent.click(screen.getByText("-"));
    expect(count()).toHaveTextContent("Count: 0");

    fireEvent.click(screen.getByText("Reset"));
    expect(count()).toHaveTextContent("Count: 0");
  });
});
