import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button } from "./Button";
import { vi } from "vitest";

describe("Button", () => {
  it("renders with text and calls onClick", () => {
    const mock = vi.fn();
    render(<Button onClick={mock}>Click Me</Button>);
    const btn = screen.getByText("Click Me");
    fireEvent.click(btn);
    expect(mock).toHaveBeenCalled();
  });

  it("applies secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText("Secondary")).toHaveClass("bg-gray-300");
  });

  it("disables the button", () => {
    const mock = vi.fn();
    render(
      <Button disabled onClick={mock}>
        Disabled
      </Button>
    );
    const btn = screen.getByText("Disabled");
    fireEvent.click(btn);
    expect(mock).not.toHaveBeenCalled();
  });
});
