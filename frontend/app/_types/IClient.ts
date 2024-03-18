export interface IClient {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: "Ativo" | "Inativo" | "Aguardando ativação" | "Desativado";
}
