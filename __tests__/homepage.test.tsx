import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Homepage", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a start button", () => {
    render(<Home />);

    const button = screen.getByRole("button");

    expect(button).toHaveTextContent(/Start/);
  });
});
