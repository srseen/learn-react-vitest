import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ConditionalRendering } from "./ConditionalRendering";

describe("ConditionalRendering", () => {
  it("shows login message if not logged in", () => {
    render(<ConditionalRendering isLoggedIn={false} />);
    expect(screen.getByText(/please log in/i)).toBeInTheDocument();
  });

  it("shows welcome message when logged in and showMessage=true", () => {
    render(<ConditionalRendering isLoggedIn={true} showMessage={true} />);
    expect(screen.getByText("Welcome back!")).toBeInTheDocument();
  });

  it("does not show welcome message when showMessage=false", () => {
    render(<ConditionalRendering isLoggedIn={true} showMessage={false} />);
    expect(screen.queryByText("Welcome back!")).not.toBeInTheDocument();
  });

  it("shows correct score message based on score", () => {
    render(<ConditionalRendering isLoggedIn={true} score={85} />);
    expect(screen.getByText("Your score is: Excellent")).toBeInTheDocument();
    expect(screen.getByText("Grade: B")).toBeInTheDocument();
  });

  it("shows grade F if score too low", () => {
    render(<ConditionalRendering isLoggedIn={true} score={40} />);
    expect(screen.getByText("Grade: F")).toBeInTheDocument();
  });
});
