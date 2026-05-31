import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TorchHero from "@/components/home/TorchHero";

describe("TorchHero", () => {
  it("renders the name, role and status", () => {
    render(<TorchHero />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Nilesh Chhipa" })
    ).toBeInTheDocument();
    expect(screen.getByText("Senior Product Designer")).toBeInTheDocument();
    expect(screen.getByText("Open to senior roles")).toBeInTheDocument();
  });

  it("renders every skill as accessible text", () => {
    render(<TorchHero />);
    // skills are present in the DOM (revealed visually by the torch, but present for a11y/SEO)
    expect(screen.getAllByText("Design Systems").length).toBeGreaterThan(0);
    expect(screen.getAllByText("3D / Motion").length).toBeGreaterThan(0);
  });
});
