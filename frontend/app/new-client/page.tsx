"use client";
import { isCPFValid } from "@/lib/cpfValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { TextInput } from "../_components/textInput";

const schema = z.object({
  name: z.string().min(1, { message: "Campo obrigatório." }),
  email: z.string().email({ message: "Digite um email válido." }),
  cpf: z.string().refine(isCPFValid, "Digite um cpf válido."),
  phone: z.string().refine((phone: string) => {
    return phone.match(
      // regexp de https://gist.github.com/boliveirasilva/c927811ff4a7d43a0e0c
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
    );
  }, "Digite um telefone válido."),
  status: z.enum(["ativo", "inativo", "Aguardando ativação", "Desativado"]),
});

type FormFields = z.infer<typeof schema>;

export default function NewClient() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = (data: FormFields) => {
    console.log(data);
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

        <form
          className="container flex w-1/4 flex-col "
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <fieldset className="mb-8 flex flex-col space-y-6"> */}

          <TextInput
            register={register}
            name="name"
            placeholder="Nome"
            options={{ required: "Campo obrigatório" }}
          />
          {errors.name && (
            <div className="mb-[-16px] text-red-500">
              {errors.name?.message}
            </div>
          )}

          <TextInput
            register={register}
            name="email"
            placeholder="Email"
            options={{ required: "Campo obrigatório" }}
          />
          {errors.email && (
            <div className="mb-[-16px] text-red-500">
              {errors.email?.message}
            </div>
          )}

          <TextInput
            register={register}
            name="cpf"
            placeholder="CPF"
            options={{
              required: "Campo obrigatório",
              validate: (value) => /^d{3}.d{3}.d{3}-d{2}$/g.test(value),
            }}
          />
          {errors.cpf && (
            <div className="mb-[-16px] text-red-500">{errors.cpf?.message}</div>
          )}

          <TextInput
            register={register}
            name="phone"
            placeholder="Telefone"
            options={{
              required: "Campo obrigatório",
              pattern: /^d{2}d{5}-d{4}$/,
            }}
          />
          {errors.phone && (
            <div className="mb-[-16px] text-red-500">
              {errors.phone?.message}
            </div>
          )}

          <select
            {...register("status", {
              required: "Campo obrigatório",
            })}
            className="mt-6 rounded-md py-3"
          >
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
            <option value="Aguardando ativação">Aguardando ativação</option>
            <option value="Desativado">Desativado</option>
          </select>

          <div className="mt-16 flex justify-between">
            <button
              type="submit"
              className="rounded-md bg-primary px-12 py-3 font-semibold text-white"
            >
              Criar
            </button>
            <button
              type="submit"
              className="rounded-md border border-primary bg-white px-12 py-3 font-semibold text-primary"
            >
              Voltar
            </button>
          </div>
          {/* </fieldset> */}
        </form>
      </section>
    </div>
  );
}
