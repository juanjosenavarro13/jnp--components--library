import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { JnpButton } from "./jnp-button";

describe("jnp button", () => {
  const label = "text example";

  it("render with label", () => {
    render(<JnpButton label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("on click", () => {
    const myFunctionOnClick = vi.fn();

    render(<JnpButton label={label} onClick={myFunctionOnClick} />);

    const button = screen.getByText(label);
    fireEvent.click(button);

    expect(myFunctionOnClick).toHaveBeenCalledTimes(1);
  });

  it("disabled", () => {
    render(<JnpButton label={label} disabled />);
    const button = screen.getByText(label);

    expect(button).toHaveAttribute("disabled", "");
  });
});
