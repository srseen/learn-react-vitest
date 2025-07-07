import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { test, expect } from "vitest";
import { UseEffectConditional } from "./UseEffectConditional";

test("shows correct message based on count", async () => {
  render(<UseEffectConditional />);

  // ตอนเริ่มต้น count = 0
  expect(screen.getByTestId("message")).toHaveTextContent(
    "Count is zero or negative"
  );

  // เพิ่ม 1
  fireEvent.click(screen.getByText("Increment"));
  await waitFor(() => {
    expect(screen.getByTestId("message")).toHaveTextContent(
      "Count is positive"
    );
  });

  // ลด 1 กลับเป็น 0
  fireEvent.click(screen.getByText("Decrement"));
  await waitFor(() => {
    expect(screen.getByTestId("message")).toHaveTextContent(
      "Count is zero or negative"
    );
  });
});
