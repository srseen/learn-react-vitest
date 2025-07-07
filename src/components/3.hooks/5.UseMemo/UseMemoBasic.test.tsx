import { render, screen, fireEvent } from "@testing-library/react";
import { UseMemoBasic } from "./UseMemoBasic";
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";

describe("UseMemoBasic", () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // สายตา console.log เพื่อจับว่า heavyCalculation ถูกเรียกกี่ครั้ง
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it("renders and memoizes computed value correctly", () => {
    render(<UseMemoBasic />);

    // ควรเรียก console.log('Calculating...') 1 ครั้งตอน mount
    expect(consoleSpy).toHaveBeenCalledWith("Calculating...");
    expect(screen.getByText(/Computed Value:/)).toBeInTheDocument();

    // กดปุ่มเพิ่ม count (ไม่เปลี่ยน num) -> ไม่ควรคำนวณใหม่
    const incrementCountBtn = screen.getByText(/Increment Count:/);
    fireEvent.click(incrementCountBtn);
    expect(screen.getByText("Increment Count: 1")).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledTimes(1); // ยังเรียกแค่ครั้งเดียว

    // กดปุ่มเปลี่ยน num (ควรคำนวณใหม่)
    const changeNumBtn = screen.getByText(/Change Num:/);
    fireEvent.click(changeNumBtn);
    expect(screen.getByText("Change Num: 2")).toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalledTimes(2); // เรียกเพิ่มอีกครั้ง
  });
});
