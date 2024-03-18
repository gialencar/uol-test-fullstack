"use client";
import { isCPFValid } from "@/lib/cpfValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { TextInput } from "../_components/textInput";

const schema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, { message: "Campo obrigatório." }),
  email: z.string().email({ message: "Digite um email válido." }),
  cpf: z.string().refine(isCPFValid, "Digite um cpf válido."),
  phone: z.string().refine((phone: string) => {
    return phone.match(
      // regexp de https://gist.github.com/boliveirasilva/c927811ff4a7d43a0e0c
      /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
    );
  }, "Digite um telefone válido."),
  status: z.enum(["Ativo", "Inativo", "Aguardando ativação", "Desativado"]),
});

export type FormFields = z.infer<typeof schema>;

export default function Form({
  onSubmit,
  data,
  type,
}: {
  onSubmit: SubmitHandler<FormFields>;
  data?: FormFields;
  type: "create" | "edit";
}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key) => {
        if (key in schema.shape) {
          setValue(key as keyof FormFields, data[key as keyof FormFields]);
        }
      });
    }
  }, [data, setValue]);

  return (
    <form
      className="container flex w-1/4 flex-col "
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        register={register}
        name="name"
        placeholder="Nome"
        // defaultValue={defaultValues?.name}
        options={{ required: "Campo obrigatório" }}
      />
      {errors.name && (
        <div className="mb-[-16px] text-red-500">{errors.name?.message}</div>
      )}

      <TextInput
        register={register}
        name="email"
        placeholder="Email"
        // // defaultValue={defaultValues?.email}
        options={{ required: "Campo obrigatório" }}
      />
      {errors.email && (
        <div className="mb-[-16px] text-red-500">{errors.email?.message}</div>
      )}

      <TextInput
        register={register}
        name="cpf"
        placeholder="CPF"
        // // defaultValue={defaultValues?.cpf}
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
        // // defaultValue={defaultValues?.phone}
        options={{
          required: "Campo obrigatório",
          pattern: /^d{2}d{5}-d{4}$/,
        }}
      />
      {errors.phone && (
        <div className="mb-[-16px] text-red-500">{errors.phone?.message}</div>
      )}

      <select
        {...register("status", {
          required: "Campo obrigatório",
        })}
        className="mt-6 rounded-md py-3 "
        // defaultValue={data?.status}
      >
        <option value="Ativo">Ativo</option>
        <option value="Inativo">Inativo</option>
        <option value="Aguardando ativação">Aguardando ativação</option>
        <option value="Desativado">Desativado</option>
      </select>

      <div className="mt-16 flex justify-between">
        <button
          type="submit"
          className="rounded-md bg-primary px-9 py-2 font-semibold text-white"
        >
          {type === "create" ? "Criar" : "Editar"}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-md border border-primary bg-white px-9 py-2 font-semibold text-primary hover:bg-primary hover:text-white"
        >
          Voltar
        </button>
      </div>
    </form>
  );
}
