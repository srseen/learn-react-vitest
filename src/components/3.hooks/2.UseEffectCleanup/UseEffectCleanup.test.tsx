import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { UseEffectCleanup } from "./UseEffectCleanup";

describe("UseEffectCleanup", () => {
  it("cleans up when unmounted", () => {
    const log = vi.spyOn(console, "log");

    render(<UseEffectCleanup />);

    fireEvent.click(screen.getByText("Toggle Timer")); // Hide timer
    expect(log).toHaveBeenCalledWith("Timer cleaned up");

    log.mockRestore();
  });
});
