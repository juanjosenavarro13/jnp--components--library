import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { JnpButton } from "./jnp-button";

describe("jnp button", () => {
  const label = "text example";
  it("render with label", () => {
    render(<JnpButton label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("on click", () => {
    render(<JnpButton label={label} />);

    // const button = screen.getByText(label);
  });
});
