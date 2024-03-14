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

        <button className="bg-primary mr-12 rounded-md px-4 py-2 font-semibold text-white">
          Novo cliente
        </button>
      </div>
    </div>
  );
};
