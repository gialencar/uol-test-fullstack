"use client";
import { User } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import Form, { FormFields } from "../_components/form";

export default function NewClient() {
  const navigation = useRouter();

  const onSubmit = async (data: FormFields) => {
    console.log('onsubmit')
    try {
      const response = await fetch("http://localhost:3000/clients", {
        // TODO: use env variable
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Client created successfully");
        navigation.push("/");
      } else {
        console.error("Failed to create client");
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
          <h2 className="text-xl ">Novo usuário</h2>
          <p className="text-zinc-500">
            Informe os campos a seguir para criar novo usuário:
          </p>
        </div>

        <Form onSubmit={onSubmit} type="create" />
      </section>
    </div>
  );
}
