import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputFormHandling } from "./InputFormHandling";

describe("InputFormHandling", () => {
  it("updates input fields", () => {
    render(<InputFormHandling />);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123456" },
    });

    expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument();
    expect(screen.getByDisplayValue("123456")).toBeInTheDocument();
  });

  it("shows submitted result after submit", () => {
    render(<InputFormHandling />);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText("Submit"));
    expect(
      screen.getByText("✅ Submitted: test@example.com / 123456")
    ).toBeInTheDocument();
  });

  it("resets form correctly", () => {
    render(<InputFormHandling />);
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByLabelText("Email")).toHaveValue("");
    expect(screen.getByLabelText("Password")).toHaveValue("");
  });
});
