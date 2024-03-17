import Link from "next/link";

export const ClientsListing = () => {
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
    </div>
  );
};
