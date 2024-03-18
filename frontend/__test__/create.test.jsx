import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NewClient from "../app/new-client/page";
import { useRouter } from "next/navigation";
import userEvent from "@testing-library/user-event";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("New client page", () => {
  it("renders the page", () => {
    render(<NewClient />);
    expect(screen.getByText("Novo usuário")).toBeInTheDocument();
  });

  it("displays an error message when incorrect information is typed", async () => {
    const mockClient = {
      cpf: "1123",
      phone: "998877",
    };

    useRouter.mockReturnValue({ query: {} });
    render(<NewClient />);
    const cpfInput = screen.getByPlaceholderText("CPF");
    const phoneInput = screen.getByPlaceholderText("Telefone");
    const submitButton = screen.getByText("Criar");

    await userEvent.click(cpfInput);
    await userEvent.type(cpfInput, mockClient.cpf);
    await userEvent.click(phoneInput);
    await userEvent.type(phoneInput, mockClient.phone);
    await userEvent.click(submitButton);

    expect(screen.getByText("Digite um cpf válido.")).toBeInTheDocument();
    expect(screen.getByText("Digite um telefone válido.")).toBeInTheDocument();
  });

  it("submits the form with correct arguments and correct api call", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest
        .fn()
        .mockResolvedValue({ message: "Client created successfully" }),
    });

    const mockClient = {
      name: "Alberta Henderson",
      email: "sadsor@das.km",
      cpf: "97292421008",
      phone: "11999999999",
      status: "Ativo",
    };

    useRouter.mockReturnValue({ query: {} });
    render(<NewClient />);
    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("Email");
    const cpfInput = screen.getByPlaceholderText("CPF");
    const phoneInput = screen.getByPlaceholderText("Telefone");
    const submitButton = screen.getByText("Criar");

    await userEvent.click(nameInput);
    await userEvent.type(nameInput, mockClient.name);
    await userEvent.click(emailInput);
    await userEvent.type(emailInput, mockClient.email);
    await userEvent.click(cpfInput);
    await userEvent.type(cpfInput, mockClient.cpf);
    await userEvent.click(phoneInput);
    await userEvent.type(phoneInput, mockClient.phone);
    await userEvent.click(submitButton);

    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mockClient),
    });
  });
});
