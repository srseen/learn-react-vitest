import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemePage } from "./ThemePage";

describe("Theme Context", () => {
  it("toggles between light and dark mode", () => {
    render(<ThemePage />);

    // ตรวจค่าเริ่มต้น
    expect(screen.getByTestId("theme-text")).toHaveTextContent("light");
    expect(screen.getByTestId("theme-wrapper").className).toContain(
      "theme-light"
    );

    // กดปุ่ม toggle
    fireEvent.click(screen.getByText("Toggle Theme"));
    expect(screen.getByTestId("theme-text")).toHaveTextContent("dark");
    expect(screen.getByTestId("theme-wrapper").className).toContain(
      "theme-dark"
    );
  });
});
