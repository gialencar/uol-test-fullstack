import { User } from "@phosphor-icons/react/dist/ssr";
import { ClientsListing } from "./_components/clients-listing";

export default function Home() {
  return (
    <div className=" mt-24 w-full max-w-7xl px-2">
      <div className=" flex items-center gap-4">
        <User size={48} />
        <h1 className="text-3xl text-zinc-700">Painel de clientes</h1>
      </div>
      <hr className="my-8" />
      <ClientsListing />
    </div>
  );
}
