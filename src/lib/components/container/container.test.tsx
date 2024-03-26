import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./container";

describe("container", () => {
  it("render default", () => {
    render(
      <Container>
        <p>interior</p>
      </Container>,
    );

    expect(screen.getByText("interior")).toBeInTheDocument();
  });
});
