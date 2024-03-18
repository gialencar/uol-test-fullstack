import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<Page />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Painel de clientes",
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the clientsList component", () => {
    render(<Page />);

    const clientsList = screen.getByRole("heading", {
      level: 2,
      name: "Listagem de usuários",
    });

    expect(clientsList).toBeInTheDocument();
  });
});
