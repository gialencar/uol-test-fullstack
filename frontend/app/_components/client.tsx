import Link from "next/link";
import React from "react";

type ClientProps = {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
};

export const Client = ({
  id,
  name,
  email,
  cpf,
  phone,
  status,
}: ClientProps) => {
  return (
    <div className="mt-8 flex justify-between rounded-sm border border-zinc-200 px-12 py-4">
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-zinc-700">{name}</p>
        <p className="text-zinc-500">{email}</p>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-zinc-700">{cpf}</p>
        <p className="text-zinc-500">{phone}</p>
      </div>
      <div className="flex flex-1 flex-col justify-center">
        <p className="text-zinc-500">{status}</p>
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
