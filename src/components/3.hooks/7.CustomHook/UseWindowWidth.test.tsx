import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UseWindowWidthExample } from "./UseWindowWidthExample";

describe("UseWindowWidthExample", () => {
  it("shows the current window width", () => {
    render(<UseWindowWidthExample />);
    expect(screen.getByTestId("window-width")).toHaveTextContent(
      `Window width: ${window.innerWidth}px`
    );
  });

  it("updates width when window is resized", async () => {
    render(<UseWindowWidthExample />);

    window.innerWidth = 1234;
    window.dispatchEvent(new Event("resize"));

    await waitFor(() => {
      expect(screen.getByTestId("window-width")).toHaveTextContent(
        "Window width: 1234px"
      );
    });
  });
});
