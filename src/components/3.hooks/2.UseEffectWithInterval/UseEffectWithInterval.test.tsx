import { render, screen } from "@testing-library/react";
import { UseEffectWithInterval } from "./UseEffectWithInterval";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import { act } from "react-dom/test-utils";

describe("UseEffectWithInterval", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("increments count every second", async () => {
    render(<UseEffectWithInterval />);

    await act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.getByTestId("counter")).toHaveTextContent("Count: 3");
  });
});
