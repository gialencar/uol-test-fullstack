"use client";

import Form, { FormFields } from "@/app/_components/form";
import { IClient } from "@/app/_types/IClient";
import { User } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditClient({ params }: { params: { id: string } }) {
  const [client, setClient] = useState<IClient>();
  const navigation = useRouter();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/clients/${params.id}`,
        ); // TODO: use env variable
        const data = await response.json();
        console.log(data);
        setClient(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    })();
  }, [params.id]);

  const onSubmit = async (data: FormFields) => {
    console.log(data);
    try {
      const response = await fetch(`http://localhost:3000/clients/${data.id}`, {
        // TODO: use env variable
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Client updated successfully");
        navigation.push("/");
      } else {
        console.error("Failed to get client");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  return (
    <div className=" mt-24 w-full max-w-7xl px-2">
      <div className=" flex items-center gap-4">
        <User size={48} />
        <h1 className="text-3xl text-zinc-700">Painel de clientes</h1>
      </div>

      <hr className="my-8" />

      <section className=" text-zinc-700">
        <div className="mb-16 flex flex-col gap-4">
          <h2 className="text-xl ">Editar usuário</h2>
          <p className="text-zinc-500">
            Informe os campos a seguir para editar o usuário:
          </p>
        </div>
      </section>

      {/* <div>Id do cliente: {params.id}</div> */}

      <Form onSubmit={onSubmit} data={client} type="edit" />
    </div>
  );
}
