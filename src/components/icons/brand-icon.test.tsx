import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BrandIcon } from "./brand-icon";

describe("BrandIcon", () => {
  it("is labelled with the brand name and inherits the text colour", () => {
    render(<BrandIcon name="zalo" />);

    const icon = screen.getByRole("img", { name: "Zalo" });
    expect(icon).toHaveAttribute("fill", "currentColor");
  });

  it("uses the brand colour on request", () => {
    render(<BrandIcon name="facebook" brandColor />);

    const fill = screen
      .getByRole("img", { name: "Facebook" })
      .getAttribute("fill");
    expect(fill).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });
});
