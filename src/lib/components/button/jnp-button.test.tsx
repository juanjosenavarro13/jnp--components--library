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

  it("type", () => {
    render(<JnpButton label={label + "1"} type="button" />);
    render(<JnpButton label={label + "2"} type="reset" />);
    render(<JnpButton label={label + "3"} type="submit" />);
    const button1 = screen.getByText(label + "1");
    const button2 = screen.getByText(label + "2");
    const button3 = screen.getByText(label + "3");

    expect(button1).toHaveAttribute("type", "button");
    expect(button2).toHaveAttribute("type", "reset");
    expect(button3).toHaveAttribute("type", "submit");
  });
});
