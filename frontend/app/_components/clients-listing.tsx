"use client";

import Link from "next/link";
import { Client } from "./client";
import { useEffect, useState } from "react";
import { IClient } from "../_types/IClient";

export const ClientsListing = () => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchClients();
    setLoading(false);
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch("http://localhost:3000/clients"); // TODO: use env variable
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl text-zinc-700">Listagem de usuários</h2>
          <p className="text-zinc-500">
            Escolha um cliente para visualizar os detalhes
          </p>
        </div>

        <Link
          href="/new-client"
          className="mr-12 rounded-md bg-primary px-4 py-2 font-semibold text-white"
        >
          Novo cliente
        </Link>
      </div>

      {loading && (
        <div className="flex justify-center pt-16">
          <div
            className="inline-block h-10 w-10 animate-spin rounded-full border-[3px] border-current border-t-transparent text-primary "
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {clients &&
        clients.map((client) => (
          <Client
            key={client.id}
            id={client.id}
            name={client.name}
            email={client.email}
            cpf={client.cpf}
            phone={client.phone}
            status={client.status}
          />
        ))}
    </div>
  );
};
