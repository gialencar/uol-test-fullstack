import React from "react";

type ClientProps = {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  status: string;
};

export const Client = ({ name, email, cpf, phone, status }: ClientProps) => {
  return (
    <div className="mt-8 flex justify-between rounded-sm border border-zinc-200 px-12 py-4">
      <div className="flex flex-col justify-center flex-1">
        <p className="text-zinc-700">{name}</p>
        <p className="text-zinc-500">{email}</p>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <p className="text-zinc-700">{cpf}</p>
        <p className="text-zinc-500">{phone}</p>
      </div>
      <div className="flex flex-col justify-center flex-1">
        <p className="text-zinc-500">{status}</p>
      </div>
      <div>
        <button className="rounded-md border border-primary bg-white px-12 py-3 font-semibold text-primary hover:bg-primary hover:text-white">
          Editar
        </button>
      </div>
    </div>
  );
};
