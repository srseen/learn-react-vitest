import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { test, expect } from "vitest";
import { UseEffectWithDependency } from "./UseEffectWithDependency";

test("updates message when count changes", async () => {
  render(<UseEffectWithDependency />);
  fireEvent.click(screen.getByText("Increment"));
  await waitFor(() => {
    expect(screen.getByTestId("message")).toHaveTextContent("Count is 1");
  });
});
