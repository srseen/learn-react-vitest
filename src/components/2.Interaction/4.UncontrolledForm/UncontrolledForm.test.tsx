import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { UncontrolledForm } from "./UncontrolledForm";

describe("UncontrolledForm", () => {
  it("shows error when fields are empty", () => {
    render(<UncontrolledForm />);
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByTestId("error")).toHaveTextContent(
      "All fields are required."
    );
  });

  it("submits successfully when fields are filled", () => {
    render(<UncontrolledForm />);
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByTestId("success")).toHaveTextContent(
      "Form submitted successfully!"
    );
  });

  it("allows form submission via keyboard Enter", () => {
    render(<UncontrolledForm />);
    const emailInput = screen.getByPlaceholderText("Enter email");
    const passwordInput = screen.getByPlaceholderText("Enter password");
    fireEvent.change(emailInput, { target: { value: "keyboard@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "abcdef" } });
    fireEvent.keyDown(passwordInput, { key: "Enter", code: "Enter" });
    fireEvent.submit(screen.getByRole("form"));
    expect(screen.getByTestId("success")).toBeInTheDocument();
  });
});
