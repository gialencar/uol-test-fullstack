import Link from "next/link";
import React from "react";
import { IClient } from "../_types/IClient";

enum Status {
  Ativo = "🟢",
  Inativo = "🔴",
  "Aguardando ativação" = "🟡",
  "Desativado" = "⚪",
}

export const Client = ({ id, name, email, cpf, phone, status }: IClient) => {
  return (
    <div className="mt-8 flex justify-between rounded-sm border border-zinc-200 px-12 py-4">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-zinc-700">{name}</p>
        <p className="text-zinc-500">{email}</p>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-zinc-700">
          {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
        </p>
        <p className="text-zinc-500">
          {phone
            .replace(/^(\d{2})(\d)/g, "($1) $2")
            .replace(/(\d)(\d{4})$/, "$1-$2")}
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-zinc-500">{`${Status[status]} ${status}`}</p>
      </div>
      <div className="flex flex-col justify-center">
        <Link
          href={`/edit-client/${id}`}
          className="rounded-md border border-primary bg-white px-12 py-3 font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Editar
        </Link>
      </div>
    </div>
  );
};
